import * as os from "os";
import * as glob from "fast-glob";
import * as fs from "fs";
import * as path from "path";
import { index } from "./docs/.vuepress/index";

import { TextLintEngine } from "textlint";

interface Link {
  source?: string;
  notionUrl?: string;
  url: string;
  type: string;
}

async function scanCtas(srcGlob: string): Promise<Link[]> {
  const files = await glob(srcGlob);

  const extractTasks = files.map(
    async (inPath) => await extractCtaLinks(inPath.toString())
  );

  const results = await Promise.all(extractTasks);

  return results.flatMap((x) => x);
}

async function extractCtaLinks(src: string): Promise<Link[]> {
  const content = await fs.promises.readFile(src, "utf8");

  const ctaButtonUrlRegex = /CtaButton.*url="(.+)"/gm;
  const matches = Array.from(content.matchAll(ctaButtonUrlRegex), (x) => x[1]); // extract first group

  const indexEntry = index.find((x) => x.file === stripDocs(src));

  return matches.map((x) => ({
    source: src,
    notionUrl: indexEntry?.frontmatter.url,
    url: ensureResolvableRelativeLinks(x),
    type: "CTA Link",
  }));
}

function stripDocs(path: string) {
  return path.substring("docs/".length);
}

function scanTool2BlockUrls(): Link[] {
  return index
    .filter((x) => x.frontmatter.properties?.link)
    .map((x) => ({
      source: x.frontmatter.title,
      notionUrl: x.frontmatter.url,
      type: "tool2block",
      url: x.frontmatter.properties.link!!,
    }));
}

function lintFile(filePath) {
  const options = {
    rules: ["no-dead-link"],
    rulesConfig: {
      "no-dead-link": {
        checkRelative: true,
        retry: 1,
        ignoreRedirects: true, // redirects are fine
      },
    },

    formatterName: "pretty-error",
  };
  const engine = new TextLintEngine(options);

  const filePathList = [path.resolve(process.cwd(), filePath)];
  return engine.executeOnFiles(filePathList).then(function (results) {
    if (engine.isErrorResults(results)) {
      const output = engine.formatResults(results);
      console.log(output);
    } else {
      console.log("All Passed!");
    }
  });
}

async function main() {
  const ctaUrls = await scanCtas("docs/**/*.md");
  const tool2BlockUrls = scanTool2BlockUrls();

  // generate a fake markdown and run it through textlint
  const linksMarkdown = [...ctaUrls, ...tool2BlockUrls]
    .map(
      (x) =>
        `${x.type} link originally found in "${x.source}" (notion: \`${x.notionUrl}\`): [link](${x.url})`
    )
    .join("\n\n");

  // we have to write a temp file, because that's the only way the pretty-error formatter renders the offending line
  // with relevant error context that allows an author to fix the broken link
  const tmpDir = await fs.promises.mkdtemp(
    path.join(os.tmpdir(), "cloudfoundation-checklinks")
  );
  try {
    const tmpFile = path.join(tmpDir, "links.md");
    await fs.promises.writeFile(tmpFile, linksMarkdown);
    await lintFile(tmpFile);
  } finally {
    await fs.promises.rm(tmpDir, { recursive: true, force: true });
  }
}

(async () => {
  await main();
})().catch((e) => {
  console.error("an unexpected error occured");
  console.error(e);
  process.exit(1);
});

function ensureResolvableRelativeLinks(x: string): any {
  /**
   * Relative links in CTAs are a problem - they point to .html files in the dist folder that don't exist yet when
   * running linting (we run lint before docs:build). Also baseURI used by textlint-rule-no-dead-links is also bad
   * ad dealing with file system links. For both of these reasons its easier to apply some "corrections" to relative
   * links here before passing them to the actual check.
   */
  const isRelativeLink = x.startsWith("/");

  if (isRelativeLink) {
    const absolutePath = path.join(__dirname, "docs/", x);
    return changeExtension(absolutePath, ".md");
  }

  return x;
}

function changeExtension(file, extension) {
  const basename = path.basename(file, path.extname(file));
  return path.join(path.dirname(file), basename + extension);
}

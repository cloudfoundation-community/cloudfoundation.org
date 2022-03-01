# Cloud Foundation Website

This is the official repository for our cloud foundation website, which you can
find at [cloudfoundation.meshcloud.io](https://cloudfoundation.meshcloud.io).

The website is based on [VuePress](https://v2.vuepress.vuejs.org/) and uses some [magic](https://github.com/meshcloud/notion-markdown-cms) to
render markdown files based on Notion documents.

> Make sure to read the [Contributor Guide](https://www.notion.so/meshcloud/Contributor-Guide-for-cloudfoundation-meshcloud-io-5b23e05cc0214e0994173c5670dac18b.). This readme contains technical information about the website only.

## Apps Script Deployment

The website contains a feedback form. This is a manually built form that
uses Google Apps Script to push feedback responses into a Google Sheet.

The script is hosted in a Google Cloud Project. You can find this GCP project 
in meshcloud-prod by going to the CFMM meshCustomer & the apps-script meshProject.

The script & its deployment itself can be found under `/feedback/` in this repository.

You can edit the script (`index.ts`) and run (in the `/feedback/` folder) `yarn deploy:feedback` to 
upload a new version of the script. The URL will stay the same (as configured in `netlify.toml`).
This process is **not** a part of the CI/CD workflow so make sure you always do it manually.
Deploying a new script means it always directly alters the production version of it.

## VuePress Site

### Bundling and Performance

Maintaing a short time to first-contentful-paint is important. That's why we need to take care to ensure proper bundling of the output, because First Contentful Paint apparently still depends on JavaScript completing to load, [see discussion](https://github.com/vuepress/vuepress-next/discussions/728).

This is not a full guide, but here's what we learned about bundling so far

- VuePress uses Vite, which in turn uses Rollup for bundling. We can customize these options via `config.ts` but should assume the defaults are sane.
- Vite runs 2x during a `docs:build`, first to generate the vuepress app, second to SSR it.
- There's a [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer) similar to webpack-bundle-analyzer, but I could not get reliable results from it(e.g. it said app bundle was 1 MiB but it was actually only 200 KiB)
- Using `await import(...);` is possible and helps rollup make better bundling decisions
- `docs:build --debug` will skip minification of bundles, allowing better debugging or gauging what's in them
- We use [bundlesize](https://github.com/siddharthkp/bundlesize) to characterize our output bundles and ensure our bundles match what we expect. An additional `description` in each entry in `bundlesize.config.json` documents the bundling decision we expect

Open issues and questions

- Can we use `await import` from a `<script setup>` tag in a vue SFC? It appears there are issues with top-level await
- We still have small bundles e.g. `CtaButton` `CtaHeader` that should be bundled together - maybe an index.ts barrel file achieves this?
- The search index of the search plugin is still part of the app bundle, maybe it could be externalized/lazy loaded?
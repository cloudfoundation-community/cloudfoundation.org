import * as fs from "fs";
import * as globby from "globby";
import * as path from "path";

import { TextstatKernel } from "@textstat/kernel";
import { TextstatRulePreset } from "@textstat/rule-context";
import { createPreset } from "@textstat/textstat-rule-preset-standard";

import countWordsRule from "./count-words";

const osLocale = require("os-locale");

/**
 * This code is a bit of a re-implementation of the official cli.js included with textstat. 
 * However we fix plugin loading issues here and also add our own custom rules
 */

export interface RunOptions {
  locale: string;
  globPatterns: string[];
}

export async function run(options: RunOptions) {
  const locale = options.locale ? options.locale : (osLocale.sync() as string);
  return await report({
    locale,
    globPatterns: options.globPatterns,
  });
}

function createTextstatPresetToTextlintPreset(preset: TextstatRulePreset) {
  return Object.keys(preset.rules).map((key) => {
    const rule = preset.rules[key];
    return {
      ruleId: key,
      rule: rule,
      options: preset.rulesConfig[key],
    };
  });
}

export interface ReportOptions {
  locale: string;
  globPatterns: string[];
}

async function report(options: ReportOptions) {
  const fileList = await globby(options.globPatterns);
  const textstat = new TextstatKernel();
  const promises = fileList.map((filePath: string) => {
    const text = fs.readFileSync(filePath, "utf-8");
    return textstat.report(text, {
      filePath: filePath,
      ext: path.extname(filePath),
      rules: [
        countWordsRule,
        ...createTextstatPresetToTextlintPreset(createPreset()),
      ],
      plugins: [
        {
          pluginId: "markdown",
          plugin: require("@textlint/textlint-plugin-markdown").default, // for some reason we mess with importing this stuff
        },
      ],
      sharedDeps: {
        filePathList: fileList,
        locale: options.locale,
      },
    });
  });
  return Promise.all(promises);
}

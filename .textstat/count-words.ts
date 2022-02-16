import { ASTNodeTypes, TxtNode, TxtNodeType, TxtParentNode } from '@textlint/ast-node-types';
import { Localize, TextstatRuleReporter } from '@textstat/rule-context';

const meta = {
  docs: {},
  messages: {
    message: {
      en: "Number of words in the document",
    },
    "Number of words": {
      en: "Number of words",
    },
  },
};

function countWords(string: string) {
  if (!string) return 0;

  const match = string.match(/"(?:\\"|[^"])+"|[^\s]+/g);
  if (!match) {
    return 0;
  }

  return match.length;
}

const report: TextstatRuleReporter = function (context, _options, deps) {
  const { Syntax, getSource, report } = context;

  const { t } = new Localize(meta.messages, deps.locale);

  function traverseAndCountWords(node: TxtParentNode | TxtNode): number {
    switch (node.type) {
      case ASTNodeTypes.Str:
        return countWords(getSource(node));
      default:
        return node.children?.reduce(
          (acc, x) => traverseAndCountWords(x) + acc,
          0
        ) || 0;
    }
  }

  return {
    [Syntax.Document](node) {
      const wordCount = traverseAndCountWords(node);
      report(node, {
        message: t("message"),
        range: node.range,
        details: [
          {
            name: t("Number of words"),
            value: wordCount,
          },
        ],
      });
    },
  };
};

export default {
  ruleId: "textstat-count-words",
  rule: {
    meta,
    report,
  },
  options: true,
};

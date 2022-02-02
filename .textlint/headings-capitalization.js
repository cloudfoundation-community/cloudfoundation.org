"use strict";
/*
 * Copyright (c) 2015 Nate Sanden.
 *
 * This code makes use of "Title Caps" by John Gruber/John Resig.
 * It is open-sourced under the MIT license.
 *
 * License: http://www.opensource.org/licenses/mit-license.php
 * Original source: at http://ejohn.org/files/titleCaps.js
 *
 * Adapted by Nate Sanden https://headlinecapitalization.com/titleCaps.js 2015
 * Ported to JavaScript By John Resig - http://ejohn.org/ - 21 May 2008
 * Original by John Gruber - http://daringfireball.net/ - 10 May 2008
 */
function TitleCapsEditor() {
    const ORIGINAL = 1;
    const STYLE_ASSOCIATED_PRESS_4 = 2;
    const STYLE_ASSOCIATED_PRESS_5 = 3;
    const STYLE_CHICAGO_MANUAL = 4;

    var mode = ORIGINAL;

    var prepositions = [
        'about', 'above', 'across', 'after', 'against', 'along', 'among', 'around', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'between', 'beyond', 'but', 'by', 'despite', 'down', 'during', 'except', 'for', 'from', 'in', 'inside', 'into', 'like', 'near', 'of', 'off', 'on', 'onto', 'out', 'outside', 'over', 'past', 'per', 'since', 'through', 'throughout', 'till', 'to', 'toward', 'under', 'underneath', 'until', 'up', 'upon', 'via', 'with', 'within', 'without'];
    var articles = ['a', 'an', 'the'];
    var conjunctions = ['and', 'but', 'or', 'nor', 'for', 'yet', 'so'];
    var other = ['if', 'en', 'as', 'vs.', 'v[.]?'];
    var small = '(' + (prepositions.concat(articles).concat(conjunctions).concat(other)).join('|') + ')';
    var punct = "([!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)";

    /**
     * Public method. Sets capitalization mode/rule.
     */
    this.setMode = function (value) {
        value = parseInt(value, 10);
        mode = value >= 1 && value <= 4 ? value : STYLE_CHICAGO_MANUAL;
    };

    /**
     * Public method. Gets capitalization mode/rule.
     */
    this.getMode = function () {
        return mode;
    };

    /**
     * Converts text/phrase to titlecase
     */
    this.capitalize = function (title) {
        var parts = [], split = /[:.;?!] |(?: |^)[""]/g, index = 0;

        while (true) {
            var m = split.exec(title);
            parts.push(title.substring(index, m ? m.index : title.length)
                .replace(/\b([A-Za-z][a-z.'"]*)\b/g, function (all) {
                    return /[A-Za-z]\.[A-Za-z]/.test(all) ? all : upper(all);
                })
                .replace(/\b([A-Za-z]*[^\u0000-\u007F]+[A-Za-z]*)\b/g, function (all) {
                    return upper(all);
                })
                .replace(RegExp("\\b" + small + "\\b", "ig"), function (word) {
                    if (mode == STYLE_ASSOCIATED_PRESS_4) {
                        return word.length >= 4 ? upper(word) : lower(word);
                    }
                    else if (mode == STYLE_ASSOCIATED_PRESS_5) {
                        return word.length >= 5 ? upper(word) : lower(word);
                    }
                    else {
                        return lower(word);
                    }
                })
                .replace(RegExp("^" + punct + small + "\\b", "ig"), function (all, punct, word) {
                    return punct + upper(word);
                })
                .replace(RegExp("\\b" + small + punct + "$", "ig"), upper));

            index = split.lastIndex;

            if (m) parts.push(m[0]);
            else break;
        }

        return parts.join("").replace(/ V(s?)\. /ig, " v$1. ")
            .replace(/(['"])S\b/ig, "$1s")
            .replace(/\b(AT&T|Q&A)\b/ig, function (all) {
                return all.toUpperCase();
            });
    };

    /**
     * Converts word to lowercase
     */
    function lower(word) {
        return word.toLowerCase();
    }

    /**
     * Converts the first letter of a word to uppercase
     */
    function upper(word) {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }
};

const titlecaps = new TitleCapsEditor();
titlecaps.setMode(TitleCapsEditor.STYLE_CHICAGO_MANUAL);

function reporter(context) {
    const { Syntax, RuleError, fixer, getSource, report } = context;
    return {
        [Syntax.Header](node) {
            const textNode = node.children[0];
            if (textNode.type !== Syntax.Str){
                report(node, new RuleError("Heading's first node is not a Str node"));
                return;
            }

            const text = getSource(textNode);
            const correct = titlecaps.capitalize(text);

            const replace = fixer.replaceText(textNode, correct);
            if (text !== correct) {
                report(node, new RuleError(`Incorrectly capitalized heading '${text}', correct would be '${correct}'`, { fix: replace }));
                return;
            }

        }
    };
};

module.exports = {
    linter: reporter,
    fixer: reporter
};
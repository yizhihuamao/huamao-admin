const fabric = require('@umijs/fabric');

module.exports = {
    ...fabric.prettier,

    arrowParens: 'avoid',
    bracketSpacing: true,
    endOfLine: 'auto',
    htmlWhitespaceSensitivity: 'css',
    jsxBracketSameLine: false,
    jsxSingleQuote: false,
    // parser: "babel",
    printWidth: 120,
    quoteProps: 'as-needed',
    semi: true,
    tabWidth: 4,
    trailingComma: 'none',
    useTabs: false
};

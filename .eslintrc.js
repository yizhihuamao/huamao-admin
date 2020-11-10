module.exports = {
    extends: [require.resolve('@umijs/fabric/dist/eslint')],
    globals: {
        ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
        page: true,
        REACT_APP_ENV: true
    },
    rules: {
        indent: [2, 4, { SwitchCase: 1 }],
        'react/jsx-props-no-spreading': 0,
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        '@typescript-eslint/indent': [2, 4],
        'comma-dangle': [2, 'never'],
        'no-console': 0,
        'max-len': [
            2,
            {
                code: 120,
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }
        ]
    }
};

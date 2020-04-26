module.exports = {
    parserOptions: {
        project: './tsconfig.json',
    },
    extends:       [
        "airbnb-typescript",
        "react-app",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended"
    ],
    plugins: [
        "@typescript-eslint",
        "eslint-plugin-simple-import-sort",
        "react",
        "react-hooks",
        "jsx-a11y",
        "prettier",
    ],
    rules:         {
        "simple-import-sort/sort": "error",
        '@typescript-eslint/no-use-before-define': ["error",
                                                    {
                                                        "functions": false
                                                    }],
        'react/jsx-props-no-spreading':            [
            'error', {
                'custom': 'ignore',
            },
        ],
        "prettier/prettier":            [
            "error"
        ]
    },
};

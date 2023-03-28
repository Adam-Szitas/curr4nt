const defaultTsRules = {
    '@angular-eslint/component-class-suffix': 2,
    '@angular-eslint/directive-class-suffix': 2,
    '@angular-eslint/no-input-rename': 2,
    '@angular-eslint/no-output-native': 2,
    '@angular-eslint/use-lifecycle-interface': 2,
    '@typescript-eslint/indent': 2,
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-unsafe-call': 2,
    '@typescript-eslint/no-inferrable-types': 2,
    'prefer-const': 2,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    '@typescript-eslint/array-type': 2,
};

const commonTsSetup = {
    parser: '@typescript-eslint/parser',
    plugins: ['simple-import-sort', 'eslint-plugin-prefer-arrow', '@typescript-eslint'],
};

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', '@angular-eslint'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js', '.json', '.conf', '.md'],
    rules: {
        ...defaultTsRules,
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
    overrides: [
        {
            files: ['*.ts'],
            extends: ['plugin:@typescript-eslint/recommended', 'plugin:@angular-eslint/recommended'],
            ...commonTsSetup,
            rules: { ...defaultTsRules },
        },
        {
            files: ['*.html'],
            extends: ['plugin:@angular-eslint/template/recommended'],
            parser: '@angular-eslint/template-parser',
            rules: {},
        },
    ],
};

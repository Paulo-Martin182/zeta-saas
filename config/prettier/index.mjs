/** @typedef {import('prettier').Config} PrettierConfig */

/** @type {PrettierConfig} */

const config = {
    plugins: ['prettier-plugin-tailwindcss'],
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: false,
    singleQuote: true,
    bracketSpacing: true,
    trailingComma: 'es5',
    arrowParens: 'avoid',
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    arrowParens: 'always',
    endOfLine: 'auto',
    bracketSameLine: false
}

export default config
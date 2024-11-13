module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: "eslint:recommended",
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            module: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        "no-strict-imports": ["error"],
        "linebreak-style": 0,
        "quotes": ["error", "single", { avoidEscape: true }],
        strict: [2, "never"],
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/react-uses-jsx-scope": 2,
        "no-undef": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-console": "warn"
    }
}
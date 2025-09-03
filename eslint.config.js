const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

// Initialize with the necessary configurations
const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  eslintrc: true
});

module.exports = [
  js.configs.recommended,
  ...compat.config({
    env: { 
      es2021: true, 
      node: true, 
      jest: true 
    },
    globals: {
      __ENV: "readonly", // tambahkan global variable untuk k6
    },
    rules: {
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": "off",
      "eqeqeq": ["error", "always"]
    }
  })
];

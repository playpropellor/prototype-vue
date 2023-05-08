/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  globals: {
    defineProps: true,
    defineEmits: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 2,
        },
      },
    ],
    "vue/multi-word-component-names": "off",
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
};

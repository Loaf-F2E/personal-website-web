const { defineConfig } = require('eslint-define-config')
const prettierrc = require('./.prettierrc.js')

module.exports = defineConfig({
  root: true,
  /* 指定如何解析语法。*/
  parser: 'vue-eslint-parser',
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {},
  // https://eslint.bootcss.com/docs/user-guide/configuring#specifying-globals
  globals: {
    Nullable: true
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    // 'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.

    'plugin:vue/vue3-recommended',
    // 此条内容开启会导致 全局定义的 ts 类型报  no-undef 错误，因为
    // https://cn.eslint.org/docs/rules/
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-undef': 'off',
    // 禁止使用 var
    quotes: ['warn', 'single'],
    'no-console': [
      'error',
      {
        allow: ['log', 'warn', 'error']
      }
    ],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    'no-var': 'error',
    // semi: 'off',
    'no-unused-vars': 'off', // 声明但未使用
    semi: ['warn', 'never'],
    'eol-last': 'off',
    'comma-dangle': ['error', 'never'],
    // 优先使用 interface 而不是 type
    // 'vue/html-indent': [
    //   'error',
    //   2,
    //   {
    //     attribute: 1,
    //     baseIndent: 1,
    //     closeBracket: 0,
    //     alignAttributesVertically: true,
    //     ignores: []
    //   }
    // ],
    // 关闭此规则 使用 prettier 的格式化规则， 感觉prettier 更加合理，
    // 而且一起使用会有冲突
    'vue/max-attributes-per-line': ['off'],
    'vue/multi-word-component-names': 0,
    // 强制使用驼峰命名
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    'prettier/prettier': ['error', prettierrc]
  }
})

const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended' // 一定要放在最后。因为 extends 中后引入的规则会覆盖前面的规则。
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // @typescript-eslint
    '@typescript-eslint/explicit-function-return-type': 'off', // 需要函数和类方法的显式返回类型
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用该 any 类型
    '@typescript-eslint/no-var-requires': 'off', // 不允许使用 require 语句，除了在 import 语句中
    '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
    '@typescript-eslint/no-use-before-define': 'off', // 在定义之前禁止使用变量
    '@typescript-eslint/ban-ts-comment': 'off', // 禁止 @ts-<directive> 使用评论或在指令后要求描述
    '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
    '@typescript-eslint/no-non-null-assertion': 'off', // '!'不允许使用后缀运算符的非空断言
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 需要导出函数和类的公共类方法的显式返回和参数类型
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ], // 禁止未使用的变量
    // vue
    'vue/no-deprecated-slot-attribute': 0,
    'vue/multi-word-component-names': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'func-names': 0
  }
});

// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential','eslint:recommended',
    'plugin:vue/essential',
    'airbnb-base',],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow debugger during development
    indent: ['error', indentSpace, { ArrayExpression: 1, MemberExpression: 1, ObjectExpression: 1 }],
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'object-curly-newline': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-return-await': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': ['error', { allow: ['state'] }],
    'prefer-destructuring': ['error', { object: false, array: false }],
    'import/extensions': 'off',
    'linebreak-style': 0,
    'vue/multi-word-component-names': 'off',
    'import/no-unresolved': ['error', { caseSensitive: false, ignore: ['@'] }],
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true,
      },
    ],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 2,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      // ignores: ['pre', 'textarea', ...INLINE_ELEMENTS],
      allowEmptyLines: false,
    }],
    'vue/no-multi-spaces': ['error', {
      ignoreProperties: false,
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'below',
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],
    'vue/html-indent': ['error', indentSpace, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
    'array-element-newline': ['error', {
      ArrayExpression: 'consistent',
      ArrayPattern: { minItems: 1 },
    }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}

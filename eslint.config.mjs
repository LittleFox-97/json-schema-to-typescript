import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  typescript: {
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2024,
    },
    tsconfigPath: './tsconfig.json',
  },
  stylistic: true,
  ignores: [
    'test/__fixtures__/**',
  ],
}, {
  files: [
    'src/**/*.ts',
    'test/**/*.ts',
  ],
  rules: {
    'ts/adjacent-overload-signatures': 'error',
    'camelcase': 'off',
    'ts/no-empty-object-type': 'error',
    'ts/no-empty-function': 'error',
    'ts/no-wrapper-object-types': 'error',
    'ts/consistent-type-assertions': 'error',
    'style/member-delimiter-style': [
      'error',
      { multiline: { delimiter: 'none' } },
    ],
    'ts/naming-convention': 'off',
    'no-array-constructor': 'off',
    'ts/no-array-constructor': 'error',
    'no-empty-function': 'off',
    'ts/no-empty-interface': 'error',
    'ts/no-inferrable-types': 'error',
    'ts/no-misused-new': 'error',
    'ts/no-namespace': 'error',
    'ts/no-this-alias': 'error',
    'no-unused-vars': 'off',
    'ts/no-unused-vars': 'warn',
    'style/type-annotation-spacing': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'ts/strict-boolean-expressions': 'off',
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/buffer': ['error', 'always'],
    'no-console': 'warn',
    'ts/switch-exhaustiveness-check': 'off',
    'complexity': ['warn', 8],
  },
})

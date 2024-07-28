module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript/eslint'],
  rules: {
    'react/react-in-jsx-scope': 0,
  },
  parserOptions: {
    project: './tsconfig.json', // path of tsconfig file
  },
};

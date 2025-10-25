module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended'
  ],
  rules: {
    // Indentação de 2 espaços
    'indent': ['error', 2],

    // Aspas simples
    'quotes': ['error', 'single'],

    // Ponto e vírgula obrigatório
    'semi': ['error', 'always'],

    // Usar sempre === e !==
    'eqeqeq': ['error', 'always'],

    // Variáveis não usadas
    '@typescript-eslint/no-unused-vars': ['warn'],

    // Prettier como erro
    'prettier/prettier': ['error', { singleQuote: true, semi: true, endOfLine: 'auto' }],

    // React específico
    'react/react-in-jsx-scope': 'off' // Next.js não precisa importar React
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

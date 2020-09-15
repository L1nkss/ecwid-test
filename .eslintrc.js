module.exports = {
  plugins: ['react-hooks'],
  extends: [
    'airbnb',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': 'off',
    'react/destructuring-assignment': 'off',
    'no-plusplus': 'off',
    'max-len': ['error', { code: 150 }],
    'jsx-a11y/label-has-associated-control': 'off',
    'no-restricted-syntax': 'off',
    'react-hooks/rules-of-hooks': 'error', // Проверяем правила хуков
    'react-hooks/exhaustive-deps': 'warn', // Проверяем зависимости эффекта
  },
};

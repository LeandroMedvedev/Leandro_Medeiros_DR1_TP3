export default [
  {
    ignores: ['node_modules/**', 'dist/**'], // Ignora arquivos e diretórios
  },
  {
    files: ['**/*.js'], // Aplica as regras a todos os arquivos .js
    languageOptions: {
      ecmaVersion: 'latest', // Define a versão do ECMAScript que você está usando
      sourceType: 'module', // Permite o uso de módulos ECMAScript
    },
    rules: {
      semi: ['error', 'always'], // Enforce the use of semicolons
      quotes: ['error', 'single'], // Enforce the use of single quotes
      'no-unused-vars': 'warn', // Warns about unused variables
      indent: ['error', 2], // Enforce a 2-space indentation
    },
  },
];

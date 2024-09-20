import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  // Adiciona Prettier como plugin
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error', // Exibe erros para violações de formatação
    },
  },
  // Desativa regras que podem conflitar com Prettier
  configPrettier,
];

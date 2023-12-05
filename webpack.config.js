const path = require('path');

module.exports = {
  mode: 'production', // ou 'production' para otimizar para produção
  entry: '/assets/public/js/app.js',  // Seu ponto de entrada principal
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'common/dist'),
  },
};

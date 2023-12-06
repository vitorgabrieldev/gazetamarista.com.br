const path = require('path');

module.exports = {
  mode: 'production', // 'production' para otimizar para produção
  entry: '/assets/public/js/app.js',  //  ponto de entrada principal
  output: {
    filename: 'GLOBAL.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

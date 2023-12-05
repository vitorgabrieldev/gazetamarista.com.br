
var pathSettings = '/application/configs/application.json';

const request = (path) => {
    fetch(path)
    .then(response => response.json())
    .then(data => renderFiles(data))
    .catch(error => console.error('Erro ao buscar o arquivo:', error));
};

request(pathSettings);

const renderFiles = (data) => {
    console.log(data)
};
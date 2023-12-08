/* Scripts da página default.html */

const PathServer = './modules/models/'; 

$(document).ready(function() {
    $("#btnConectar").click(function() {

        let request = "Noticias";
        $.ajax({
            type: 'POST',
            url: `${PathServer}${request}.php`,
            data: { acao: 'exibirNoticias', id : 1 },
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log('Erro na solicitação AJAX: ' + error);
            }
        });
    });
});
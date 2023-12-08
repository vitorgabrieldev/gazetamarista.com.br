/* Scripts da página default.html */

$(document).ready(function() {
    $("#btnConectar").click(function() {
        $.ajax({
            url: "./modules/controllers/defaultcontroller.php",
            success: function(response) {
                console.log(response)
            },
            error: function(error) {
                console.error("Erro na requisição AJAX: ", error);
            }
        });
    });
});
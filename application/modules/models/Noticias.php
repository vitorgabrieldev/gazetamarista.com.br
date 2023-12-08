<?php

require_once('../controllers/NoticiasController.php');

if (isset($_POST['acao'])) {
    $acao = $_POST['acao'];
    $noticiasController = new NoticiasController();

    switch ($acao) {
        // --------------------------------------------------------------------------
        case 'exibirNoticias':
            $noticiasController->exibirNoticias();
            break;
        // --------------------------------------------------------------------------
        case 'exibirNoticia':
            if (isset($_POST['id'])) {
                $noticiaID = $_POST['id'];
                $noticiasController->exibirNoticia($noticiaID);
            }
            break;
        // --------------------------------------------------------------------------
        case 'adicionarNoticia':
            $noticiasController->exibirNoticia();
            break;
        // --------------------------------------------------------------------------
        case 'editarNoticia':
            if (isset($_POST['id'])) {
                $noticiaID = $_POST['id'];
                $noticiasController->editarNoticia($noticiaID);
            }
            break;
        // --------------------------------------------------------------------------
         case 'excluirNoticia':
            if (isset($_POST['id'])) {
                $noticiaID = $_POST['id'];
                $noticiasController->excluirNoticia($noticiaID);
            }
            break;
        // --------------------------------------------------------------------------
        
        default:
            echo 'Ação-desconhecida';
            break;
    }
} else {
    echo 'Ação-não-especificada';
}

?>
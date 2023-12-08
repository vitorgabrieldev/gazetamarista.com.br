<?php

require_once('../controllers/ComentariosController.php');

if (isset($_POST['acao'])) {
    $acao = $_POST['acao'];
    $ComentariosController = new ComentariosController();

    switch ($acao) {
        // --------------------------------------------------------------------------
        case 'listarComentarios':
            $ComentariosController->listarComentarios();
            break;

        // --------------------------------------------------------------------------
        case 'aprovarComentario':
            if (isset($_POST['id'])) {
                $comentarioID = $_POST['id'];
                $ComentariosController->aprovarComentario($comentarioID);
            }
            break;
        // --------------------------------------------------------------------------
        case 'rejeitarComentario':
            $ComentariosController->rejeitarComentario();
            break;
        // --------------------------------------------------------------------------
        case 'excluirComentario':
            if (isset($_POST['id'])) {
                $comentarioID = $_POST['id'];
                $ComentariosController->excluirComentario($comentarioID);
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
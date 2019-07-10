<?php
// CONST url = "http://localhost/superwoman/index.phtml?case=display_post,create_post,create_category"
if(!empty($_GET)){
    // mode consultation
    
}else if(!empty($_POST)){
    // $parent = isset ($_POST["parent"])?$_POST["parent"]:NULL;
    switch($_POST['case']){
        case "create-category":
        queryAddCategorie($db,$_POST["description"],$_POST["titre"], $_POST["parent"]);
        break;
        case "create-user":
        queryAddUser($db,$_POST["email"],$_POST["prenom"],$_POST["nom"],$_POST["role"],$_POST["mot_de_passe"]);
        break;

    }
}else{
    // afficher la page d'acceuil
};
?>
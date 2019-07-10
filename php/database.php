<?php


function connect(string $dsL, string $user,string $pwd){
    return new PDO($dsL,$user,$pwd);
};

const QUERY_DISPLAYCATEGORIE = 'SELECT `titre`,`id` 
FROM categories 
WHERE parent IS NULL';



function displayCategorie(PDO $dataBase){
    $query= $dataBase->prepare(QUERY_DISPLAYCATEGORIE);
    $error = $query->execute();
    $result = $query -> fetchAll();
    return $result;
}

function queryAddCategorie(PDO $dataBase, string $description, string $titre, string $parent){
    $queryCategorie= "INSERT INTO `categories`(`description`, `titre`, `parent`) VALUES (?,?,?)";
    $query= $dataBase->prepare($queryCategorie);
    $parameter[0]=$description;/*$_POST["description"];*/
    $parameter[1]=$titre;/*$_POST["titre"];*/
    $parameter[2]= (!empty($parent)) ? $parent: NULL;/*$_POST["parent"];*/
    $error = $query -> execute($parameter);
    return $error;
}

function queryAddUser(PDO $dataBase, string $email, string $prenom, string $nom, string $role, string $mot_de_passe){
    $queryUser= "INSERT INTO `utilisateurs`(`email`, `prenom`, `nom`, `role`, `mot_de_passe`) VALUES (?,?,?,?,?)";
    $query= $dataBase->prepare($queryUser);
    $parameter[0]=$email;/*$_POST["email"];*/
    $parameter[1]=$prenom;
    $parameter[2]= $nom;
    $parameter[3]= $role;
    $parameter[4]= password_hash($mot_de_passe, PASSWORD_DEFAULT);
    $error = $query -> execute($parameter);
    return $error;
}

// function queryAdd(PDO $dataBase, string $table, string $prenom, string $nom, string $role, string $mot_de_passe){
    
//     $queryAdd= "INSERT INTO ($table)(`email`, `prenom`, `nom`, `role`, `mot_de_passe`) VALUES (?,?,?,?,?)";
//     $query= $dataBase->prepare($queryAdd);
//     foreach($table2 as $champ){

//     }
//     $parameter[0]=(!empty($email)) ? $email: NULL;/*$_POST["email"];*/
//     $parameter[1]=$prenom;
//     $parameter[2]= $nom;
//     $parameter[3]= $role;
//     $parameter[4]= $mot_de_passe;
//     $error = $query -> execute($parameter);
//     return $error;
// }

?>
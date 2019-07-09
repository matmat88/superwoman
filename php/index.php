<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="">
    <title>Document</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.9.0/css/all.css"><!---->
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
    <header>
    </header>
    <main id="index">
        
        <?php 
        
        ?>
        <?php
        var_dump($_GET);
        $x=$_GET["nombre"];
        $y=$x*$x;
        echo $y;

        if(isset($_GET['nombre'])){
            $x=$_GET["nombre"];
            $y=$x*$x;
            echo "Le carré de $x est $y";   
        }else{
            echo "Vous n'avez pas fourni de nombre";
        }
        
        ?>
    </main>
    <footer>
    </footer>
</body>
<!--<script src="index.js"></script>-->
</html>
<?php
    $dsn = "mysql:host=localhost;port=3306;dbname=renderlike_db;charset=utf8mb4" ;
    $user = "render" ;
    $pass = "renderlike123-" ;
    
    try {
        $db = new PDO($dsn, $user, $pass) ;
      } catch( PDOException $ex) {
        // redirect to error page.
        header("Location: error.php") ;
        exit ;
      }
      function checkLogin($userName, $pass){
        if($userName == "render" && $pass == "Renderlike&123-"){
          return 1;
        }else{
          return 0;
        }
      }
?>
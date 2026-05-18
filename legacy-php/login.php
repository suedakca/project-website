<?php
require "./db.php";
if (!empty($_POST)) {
    extract($_POST);
    $val = checkLogin($user, $pass);
    if ($val) {

        header("Location: add.php?log=1");
        exit;
    } else {
        echo "<p>Kullanıcı adı veya şifre hatalı</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
        main {
            margin: 15vw auto;
            width: 33%;
            text-align: center;
        }
    </style>
    <title>Login Page</title>
</head>

<body>
    <main>
        <img src="images/logo-dark.png" alt="" style="width: 270px; margin-bottom:70px;" />
        <form method="post" action="login.php">
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmail3" name="user">
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" name="pass">
                </div>
            </div>
            <button type="submit" class="btn btn-primary" style="margin-top:50px">Sign in</button>
        </form>
    </main>
</body>

</html>
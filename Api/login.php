<?php
include("conexion.php");
$conexion = OpenCon();
$Email = $_POST['Email'];
$Password = $_POST['Password'];
$verificar = "select email,Passwords from user WHERE email = '$Email' and Passwords = '$Password'";
$resultado = mysqli_query($conexion, $verificar);
if(mysqli_num_rows($resultado) > 0){
    for(
        $set = array();
        $row = $resultado->fetch_assoc();
        $set = $row
    );
   
    $result = json_encode($set);
    echo ($result);

}else{

    echo ("El email o la contraseña son incorectos");
}


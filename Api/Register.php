<?php
include ("conexion.php");
$conexion = OpenCon();
$Email = $_POST['Email'];
$Password = $_POST['Password'];


$vericar= "SELECT * FROM `user` WHERE email = '$Email'";
$vericarDatos= mysqli_query($conexion,$vericar);
$dato= mysqli_num_rows($vericarDatos);

if($dato>0){
    echo('el email ingresado no esta disponible, porfavor ingrese otro email');

} else{
    $sql = "Insert into `user` (`email`, `Passwords`) 
    VALUES ('$Email', '$Password');";
    $result = $conexion->query($sql);
}

    

?>
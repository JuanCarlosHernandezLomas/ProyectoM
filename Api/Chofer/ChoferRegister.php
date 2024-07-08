<?php
include ("../conexion.php");
$conexion = OpenCon();
$Name = $_POST['Name'];
$Apellido = $_POST['Apellido'];
$Tel = $_POST['Tel'];



    $sql ="INSERT INTO `chofer`( `Name`, `Apellido`, `Tel`) VALUES ('$Name','$Apellido','$Tel')";
    $result = $conexion->query($sql);
    
    echo("");

?>
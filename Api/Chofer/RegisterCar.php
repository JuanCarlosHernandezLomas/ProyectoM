<?php
include ("../conexion.php");
$conexion = OpenCon();
$Placa = $_POST['Placa'];
$Marca = $_POST['Marca'];
$Modelo = $_POST['Modelo'];



    $sql ="INSERT INTO `veiculo`( `Name`, `Apellido`, `Tel`) VALUES ('$Name','$Apellido','$Tel')";
    $result = $conexion->query($sql);
    
    echo("");

?>
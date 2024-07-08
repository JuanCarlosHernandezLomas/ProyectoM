<?php
include ("../conexion.php");
$conexion = OpenCon();
$Name = $_POST['Name'];
$LastName = $_POST['LastName'];
$Tel = $_POST['Phone'];
$Email = $_POST['Email'];

    $sql ="INSERT INTO `cliente`(`Name`, `Telefono`, `email`, `LastName`) 
    VALUES ('$Name','$Tel','nuevo@gmail.com','$LastName')";
    $result = $conexion->query($sql);
    
    echo("");

?>
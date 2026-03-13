<?php
$host = "localhost";
$user = "root";
$password = "root"; 
$dbname = "assignment_1";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed");
}
?>
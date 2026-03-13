<?php
include 'db_config.php';

$product_name = $_POST['product_name'];
$category = $_POST['category'];
$price = $_POST['price'];
$quantity = $_POST['quantity'];

$sql = "INSERT INTO products (product_name, category, price, quantity) VALUES ('$product_name', '$category', $price, $quantity)";

mysqli_query($conn, $sql);
echo "product created successfully";
?>
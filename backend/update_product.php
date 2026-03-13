<?php
include 'db_config.php';

$product_id = $_POST['product_id'];
$product_name = $_POST['product_name'];
$category = $_POST['category'];
$price = $_POST['price'];
$quantity = $_POST['quantity'];

$sql = "UPDATE products SET product_name='$product_name', category='$category', 
        price='$price', quantity='$quantity' WHERE product_id='$product_id'";
$result = mysqli_query($conn, $sql);

echo "updated";
?>
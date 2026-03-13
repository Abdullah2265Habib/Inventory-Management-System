<?php
include 'db_config.php';

$product_id = $_GET['product_id'];
echo $product_id;
$sql = "DELETE FROM products WHERE product_id='$product_id'";

mysqli_query($conn,$sql);
echo "deleted";
?>
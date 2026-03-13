function deleteProduct(){

let id = document.getElementById("product_id").value;

fetch("http://localhost/assignment_2/backend/delete_product.php?product_id="+id)
.then(response => response.text())
.then(data=>{
document.getElementById("message").innerHTML=data;
});

}
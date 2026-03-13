document.getElementById("productForm").addEventListener("submit", function(e){

e.preventDefault();

let formData = new FormData();

formData.append("product_name", document.getElementById("product_name").value);
formData.append("category", document.getElementById("category").value);
formData.append("price", document.getElementById("price").value);
formData.append("quantity", document.getElementById("quantity").value);

fetch("http://localhost/assignment_2/backend/create_product.php",{
method:"POST",
body:formData
})
.then(response => response.text())
.then(data=>{
document.getElementById("message").innerHTML=data;
});

});
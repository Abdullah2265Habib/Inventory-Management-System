document.addEventListener('DOMContentLoaded', () => {
	fetch("../backend/get_products.php")
		.then(response => {
			console.log('get_products fetch status:', response.status, response.statusText);
			return response.json();
		})
		.then(data => {
			console.log('get_products response data:', data);
			const table = document.getElementById("productTable");
			if (!table) {
				console.error('productTable element not found');
				return;
			}
			// remove existing data rows (keep header)
			while (table.rows.length > 1) table.deleteRow(1);

			if (!Array.isArray(data)) {
				console.error('Unexpected data format:', data);
				return;
			}

			data.forEach(product => {
				const row = table.insertRow();
				row.insertCell(0).innerText = product.product_id || '';
				row.insertCell(1).innerText = product.product_name || '';
				row.insertCell(2).innerText = product.category || '';
				row.insertCell(3).innerText = product.price || '';
				row.insertCell(4).innerText = product.quantity || '';
			});
		})
		.catch(err => {
			console.error('Failed to fetch products:', err);
		});
});
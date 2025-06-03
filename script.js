fetch('http://localhost:3000/api/products')
.then(res => res.json())
.then(data =>{
    const container = document.getElementById('product');
    data.forEach(products => {
        const div = document.createElement('div');
        div.innerHTML = '<h3>${product.name}</h3><p>$${product.price}</p>';
        container.appendChild(div);
        
    });
});
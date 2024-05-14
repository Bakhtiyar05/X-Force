const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Ürünlerin saklanacağı basit bir dizi
let products = [];

// Ürün ekleme endpoint'i
app.post('/api/products/add', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.json({ message: 'Ürün başarıyla eklendi!', product: newProduct });
});

// Server dinleme
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

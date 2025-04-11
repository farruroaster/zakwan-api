const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Zakwan Product API!');
});

// Helper to read products from file
const getProducts = () => {
  try {
    const data = fs.readFileSync('products.json');
    return JSON.parse(data);
  } catch (error) {
    return []; // return empty array if file doesn't exist or is invalid
  }
};

// Helper to save products to file
const saveProducts = (products) => {
  fs.writeFileSync('products.json', JSON.stringify(products, null, 2));
};

// POST /products - create a new product
app.post('/products', (req, res) => {
  const newProduct = req.body;
  const products = getProducts();
  products.push(newProduct);
  saveProducts(products);
  res.status(201).json(newProduct);
});

// GET /products - get all products
app.get('/products', (req, res) => {
  const products = getProducts();
  res.json(products);
});

// GET /products/:id - get product by ID
app.get('/products/:id', (req, res) => {
  const products = getProducts();
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

// PUT /products/:id - update product by ID
app.put('/products/:id', (req, res) => {
  const products = getProducts();
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Product not found');

  const updatedProduct = { ...products[index], ...req.body };
  products[index] = updatedProduct;
  saveProducts(products);
  res.json(updatedProduct);
});

// DELETE /products/:id - delete product by ID
app.delete('/products/:id', (req, res) => {
  let products = getProducts();
  const filtered = products.filter(p => p.id !== parseInt(req.params.id));
  if (products.length === filtered.length) return res.status(404).send('Product not found');

  saveProducts(filtered);
  res.status(204).send();
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
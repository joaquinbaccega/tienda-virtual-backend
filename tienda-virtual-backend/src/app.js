// src/app.js

const express = require('express');
const app = express();

// Import controllers
const ProductController = require('./controllers/productController');
const UserController = require('./controllers/userController');
const OrderController = require('./controllers/orderController');

// Import middleware
const authMiddleware = require('./middleware/authMiddleware');

// Import routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Configure middleware
app.use(express.json());
app.use(authMiddleware);

// Configure routes
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

// Create instances of controllers
const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
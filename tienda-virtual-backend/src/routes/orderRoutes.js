const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

// Ruta para obtener todos los pedidos
router.get('/', OrderController.getAllOrders);

// Ruta para obtener un pedido por su ID
router.get('/:id', OrderController.getOrderById);

// Ruta para crear un nuevo pedido
router.post('/', OrderController.createOrder);

// Ruta para actualizar un pedido existente
router.put('/:id', OrderController.updateOrder);

// Ruta para eliminar un pedido
router.delete('/:id', OrderController.deleteOrder);

module.exports = router;
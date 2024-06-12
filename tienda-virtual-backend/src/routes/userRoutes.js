const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Ruta para obtener todos los usuarios
router.get('/', UserController.getAllUsers);

// Ruta para obtener un usuario por su ID
router.get('/:id', UserController.getUserById);

// Ruta para crear un nuevo usuario
router.post('/', UserController.createUser);

// Ruta para actualizar un usuario existente
router.put('/:id', UserController.updateUser);

// Ruta para eliminar un usuario
router.delete('/:id', UserController.deleteUser);

module.exports = router;
const express = require('express');
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');

// Define user routes
router.get('/', getUsers);           // Get all users
router.post('/', createUser);        // Create a new user
router.put('/:id', updateUser);      // Update user by ID
router.delete('/:id', deleteUser);   // Delete user by ID

module.exports = router;

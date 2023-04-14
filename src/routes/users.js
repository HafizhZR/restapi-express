const express = require('express');

const UserController = require('../controller/users.js')

const router = express.Router();

// CREATE - POST
router.post('/', UserController.createNewUSer);

// READ - GET
router.get('/', UserController.getAllUSers);

//UPDATE - PATCH
router.patch('/:idUser', UserController.updateUser);

//DELETE - DELETE
router.delete('/:idUser', UserController.deleteUser) 

// Cara default routing

// router.get('/', (req,res) => {
//     res.json({
//         message: "GET user success"
//     });
// });

// router.post('/', (req,res) => {
//     res.json({
//         message: "POST user success"
//     });
// });

module.exports = router;
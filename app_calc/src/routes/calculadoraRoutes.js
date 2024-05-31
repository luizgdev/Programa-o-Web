const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadoraController');

router.get('/', calculadoraController.showForm);
router.post('/calcular', calculadoraController.calculate);

module.exports = router;

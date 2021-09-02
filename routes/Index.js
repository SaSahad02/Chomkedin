const express = require('express');

const {signin} = require('../controllers/Admin.js')
const { orderSave, orderView, orderCompleted } = require('../controllers/Order.js')

const router = express.Router();

router.post('/signin', signin)
router.post('/order', orderSave)
router.post('/orderview', orderView)
router.post('/order-response', orderCompleted)

module.exports = router;
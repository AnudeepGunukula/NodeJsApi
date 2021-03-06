const express = require('express');
const checkAuth = require('../middleware/check-auth');
const router = express.Router();

const OrdersController = require('../controllers/orders');


router.get('/', checkAuth, OrdersController.orders_get_all);

router.post('/', checkAuth, OrdersController.orders_create_order);

router.get('/:orderId', checkAuth, OrdersController.orders_get_order);

router.patch('/:orderId', checkAuth, OrdersController.orders_patch_order);

router.delete('/:orderId', checkAuth, OrdersController.orders_delete_order);

module.exports = router;
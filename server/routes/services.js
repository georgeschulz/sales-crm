const router = require('express').Router();
const controller = require('../controllers/services')

router.get('/:businessId', controller.getServicesController);

module.exports = router;
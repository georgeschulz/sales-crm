const router = require('express').Router();
const { getBusinessDetailsController } = require('../controllers/business');

router.get('/:businessId', getBusinessDetailsController);

module.exports = router;
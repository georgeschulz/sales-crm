const router = require('express').Router();
const controller = require('../controllers/leads')

router.post('/create', controller.createLeadController);

module.exports = router;


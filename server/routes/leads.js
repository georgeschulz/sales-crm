const router = require('express').Router();
const controller = require('../controllers/leads')

router.post('/create', controller.createLeadController);
router.get('/:leadId', controller.readLeadController)

module.exports = router;


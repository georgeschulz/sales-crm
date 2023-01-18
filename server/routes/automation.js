const router = require('express').Router();
const controller = require('../controllers/automation')

router.post('/shorten-url', controller.shortenUrl);
router.post('/sms', controller.sendSMS);

module.exports = router;
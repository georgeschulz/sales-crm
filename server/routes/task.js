const router = require('express').Router();
const controllers = require('../controllers/tasks');

router.post('/', controllers.createTaskController);

module.exports = router;
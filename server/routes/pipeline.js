const router = require('express').Router();
const controller = require('../controllers/pipeline')

router.get('/', controller.readPipelineList);
router.put('/update-stage', controller.updateLeadStageController);
router.get('/:pipelineId', controller.readPipelineContent);

module.exports = router;


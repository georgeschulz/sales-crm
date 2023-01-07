const { getPipelines } = require('../model/getPipelines');
const { getFullPipeline } = require('../model/getFullPipeline');
const { updateLeadStage } = require('../model/updateLeadStage');

const readPipelineList = async (req, res) => {
    try {
        const pipelines = await getPipelines(1);
        if(pipelines.length > 0) {
            res.status(200).send({
                message: 'Pipelines found',
                data: pipelines
            });
        } else {
            res.status(404).send({
                message: 'No pipelines found',
                data: []
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Error reading pipelines',
            data: []
        });
    }
}

const readPipelineContent = async (req, res) => {
    try {
        const pipelineId = req.params.pipelineId;
        const pipelineContent = await getFullPipeline(Number(pipelineId));
        if(pipelineContent) {
            res.status(200).send({
                message: 'Pipeline content found',
                data: pipelineContent
            });
        } else {
            res.status(404).send({
                message: 'No pipeline content found',
                data: []
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Error reading pipeline content',
            data: []
        });
    }
}

const updateLeadStageController = async (req, res) => {
    try {
        const { leadId, stageId } = req.body;
        const updatedLead = await updateLeadStage(Number(leadId), Number(stageId));
        if(updatedLead) {
            res.status(200).send({
                message: 'Lead stage updated',
                data: updatedLead
            });
        } else {
            res.status(404).send({
                message: 'No lead found',
                data: []
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Error updating lead stage',
            data: []
        });
    }
}

module.exports = {
    readPipelineList,
    readPipelineContent,
    updateLeadStageController
}

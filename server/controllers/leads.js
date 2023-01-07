const { createLead } = require('../model/createLead');
const { getPipelineStructure } = require('../model/getPipelineStructure');
const { getLead } = require('../model/getLead');

const createLeadController = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, address, city, state, zip, userId, leadType, source, pipelineId } = req.body;
        
        //find the first stage in the pipeline
        const pipelineStructure = await getPipelineStructure(pipelineId);
        const firstStage = pipelineStructure[0].stage_id;
        
        const newLead = await createLead(firstName, lastName, email, phone, address, city, state, zip, userId, leadType, source, firstStage);

        if(newLead) {
            res.status(200).send({
                message: 'Lead created',
                data: newLead
            });
        } else {
            res.status(404).send({
                message: 'Lead not created',
                data: []
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Error creating lead',
            data: []
        });
    }
}

const readLeadController = async (req, res) => {
    try {
        const { leadId } = req.params;
        const lead = await getLead(leadId);
        if(lead) {
            res.status(200).send({
                message: 'Lead found',
                data: lead
            });
        } else {
            res.status(404).send({
                message: 'Lead not found',
                data: []
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Error finding lead',
            data: []
        });
    }
}


module.exports = {
    createLeadController,
    readLeadController
}

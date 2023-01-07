const { createLead } = require('../model/createLead');
const { getPipelineStructure } = require('../model/getPipelineStructure');
const { updateFirstName, updateLastName, updateAddress, updateCity, updateEmail, updateLeadType, updatePhone, updatePipeline, updateSetupPayment, updateSource, updateStage, updateState, updateUserId, updateZip } = require('../model/updateAccount');
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

const updateAccountController = async (req, res) => {
    try {
        const fieldsToUpdate = Object.keys(req.body)[0];
        const valueToUpdate = Object.values(req.body)[0];
        const { leadId } = req.params;

        let newLead;

        switch(fieldsToUpdate) {
            case 'firstName':
                newLead = await updateFirstName(leadId, valueToUpdate);
                break;
            case 'lastName':
                newLead = await updateLastName(leadId, valueToUpdate);
                break;
            case 'email':
                newLead = await updateEmail(leadId, valueToUpdate);
                break;
            case 'phone':
                newLead = await updatePhone(leadId, valueToUpdate);
                break;
            case 'address':
                newLead = await updateAddress(leadId, valueToUpdate);
                break;
            case 'city':
                newLead = await updateCity(leadId, valueToUpdate);
                break;
            case 'state':
                newLead = await updateState(leadId, valueToUpdate);
                break;
            case 'zip':
                newLead = await updateZip(leadId, valueToUpdate);
                break;
            case 'leadType':
                newLead = await updateLeadType(leadId, valueToUpdate);
                break;
            case 'source':
                newLead = await updateSource(leadId, valueToUpdate);
                break;
            case 'pipeline':
                newLead = await updatePipeline(leadId, valueToUpdate);
                break;
            case 'stage':
                newLead = await updateStage(leadId, valueToUpdate);
                break;
            case 'userId':
                newLead = await updateUserId(leadId, valueToUpdate);
                break;
            case 'setupPayment':
                newLead = await updateSetupPayment(leadId, valueToUpdate);
                break;
        }        
        
        res.status(200).send({
            message: 'Account updated',
            data: newLead
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Error updating account',
            data: []
        });
    }
}


        


module.exports = {
    createLeadController,
    readLeadController,
    updateAccountController
}

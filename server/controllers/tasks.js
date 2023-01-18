const createTask = require('../model/createTask')

const createTaskController = async (req, res) => {
    try {
        const { leadId, description, dueDate } = req.body
        const task = await createTask(leadId, description, dueDate)
        res.status(201).send({
            message: "Task created successfully",
            data: task
        })
    } catch (error) {
        res.status(400).send({
            "message": "Unable to create task",
            "data": null
        })
    }
}

module.exports = {
    createTaskController
}
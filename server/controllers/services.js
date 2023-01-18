const { getServices } = require('../model/getServices')

const getServicesController = async (req, res) => {
    try {
        const { businessId } = req.params
        const services = await getServices(businessId)
        if(services) {
            res.status(200).send({
                message: 'Services found',
                data: services
            })
        } else {
            res.status(404).send({
                message: 'Services not found',
                data: []
            })
        }
    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: 'Error finding services',
            data: []
        })
    }
}

module.exports = {
    getServicesController
}
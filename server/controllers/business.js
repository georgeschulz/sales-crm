const { getSources } = require('../model/getSources')
const { getBusinessDetails } = require('../model/getBusinessDetails')
const { getSalespeople } = require('../model/getSalespeople')

const getBusinessDetailsController = async (req, res) => {
    try {
        const { businessId } = req.params;
        const sources = await getSources(businessId)
        const businessDetails = await getBusinessDetails(businessId)
        const salespeople = await getSalespeople(businessId)

        res.status(200).json({
            message: 'Sources retrieved successfully',
            data: {
                businessId,
                sources,
                businessDetails,
                salespeople
            }
        })
    } catch (e) {
        res.status(500).json({
            message: 'Error retrieving sources',
            data: null
        })
    }
}

module.exports = {
    getBusinessDetailsController
}
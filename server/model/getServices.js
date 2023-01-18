const db = require('./db')

module.exports.getServices = async (businessId) => {
    const { rows } = await db.query('SELECT * FROM services WHERE business_id = $1', [businessId])
    const services = rows.map(service => {
       return {
        ...service,
        billingTypes: service.billing_types.split(','),
       }
    })
    
    return services
}
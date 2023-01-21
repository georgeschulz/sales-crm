const db = require('./db')

module.exports.getBusinessDetails = async (businessId) => {
    const { rows } = await db.query('SELECT * FROM businesses WHERE business_id = $1', [businessId])
    delete rows[0].business_id;
    return rows[0];
}
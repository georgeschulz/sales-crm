const db = require('./db')

module.exports.getSources = async (businessId) => {
    const { rows } = await db.query('SELECT source_id, name FROM sources WHERE business_id = $1', [businessId])
    return rows;
}
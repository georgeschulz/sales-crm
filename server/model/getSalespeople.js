const db = require('./db')

module.exports.getSalespeople = async (businessId) => {
    const query = `
        SELECT
            user_id,
            first_name,
            last_name,
            email
        FROM users
        WHERE role = 'salesperson'
            AND business_id = $1
    `
    
    const { rows } = await db.query(query, [businessId])
    return rows;
}
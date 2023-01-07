const db = require('./db');
const timestamp = require('./timestamp');

module.exports.createLead = async (firstName, lastName, email, phone, address, city, state, zip, userId, leadType, source, firstStage) => {
    const query = `INSERT INTO leads (first_name, last_name, email, phone, address, city, state, zip, user_id, lead_type, source, stage_id, close_status, date_created, setup_payment, setup_initial, is_commission_paid, commission_value) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, 'open', $13, false, false, false, 0) RETURNING *`;
    const values = [firstName, lastName, email, phone, address, city, state, zip, userId, leadType, source, firstStage, timestamp()];
    const { rows } = await db.query(query, values);
    return rows[0];
}
const db = require('./db');

module.exports.getLead = async (leadId) => {
    const { rows } = await db.query(`
    SELECT 
        leads.lead_id,
        leads.first_name,
        leads.last_name,
        leads.address,
        leads.city,
        leads.state,
        leads.zip,
        leads.lead_type,
        leads.source,
        leads.email,
        leads.phone,
        leads.close_status,
        leads.date_created,
        leads.setup_payment,
        leads.setup_initial,
        leads.commission_value,
        leads.is_commission_paid,
        leads.stage_id,
        stages.name as stage_name,
        stages.position as stage_position
    FROM leads
    INNER JOIN stages 
    ON leads.stage_id = stages.stage_id
    WHERE lead_id = $1`, [leadId]);
    
    return rows[0];
}
const db = require('./db');
module.exports.updateLeadStage = async (leadId, stageId) => {
    const { rows } = await db.query(`
    UPDATE leads
    SET stage_id = $1
    WHERE lead_id = $2
    RETURNING *;
    `, [stageId, leadId]);
    return rows[0];
}

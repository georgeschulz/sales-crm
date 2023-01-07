const db = require('./db');

module.exports.getPipelineStructure = async (pipelineId) => {
    const { rows } = await db.query(`
    SELECT * FROM pipelines
    INNER JOIN stages
    ON pipelines.pipeline_id = stages.pipeline_id
    WHERE pipelines.pipeline_id = $1
    ORDER BY position ASC;`, [pipelineId]);
    return rows;
}
const db = require('./db');

module.exports.getPipelines = async (businessId) => {
    const { rows } = await db.query(`
    SELECT
        pipelines.pipeline_id,
        pipelines.name as pipeline_name,
        pipelines.business_id,
        stages.stage_id,
        stages.name as stage_name,
        stages.position
    FROM pipelines 
    LEFT JOIN stages ON pipelines.pipeline_id = stages.pipeline_id 
    WHERE pipelines.business_id = $1 
    ORDER BY pipelines.pipeline_id, stages.position
    `, [businessId]);
    const pipelines = [];
    let currentPipeline = null;
    let currentStages = [];

    // map the arrays into pipeline objects
    rows.forEach(row => {
        if (currentPipeline === null || currentPipeline.pipeline_id !== row.pipeline_id) {
            if (currentPipeline !== null) {
                currentPipeline.stages = currentStages;
                pipelines.push(currentPipeline);
            }
            currentPipeline = {
                pipeline_id: row.pipeline_id,
                name: row.pipeline_name,
                pipeline_id: row.pipeline_id,
                stages: []
            };
            currentStages = [];
        }
        if (row.stage_id !== null) {
            currentStages.push({
                stage_id: row.stage_id,
                name: row.stage_name,
                position: row.position
            });
        }

    });
    if (currentPipeline !== null) {
        currentPipeline.stages = currentStages;
        pipelines.push(currentPipeline);
    }
    return pipelines;

    //return rows;
}
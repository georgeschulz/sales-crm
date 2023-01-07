const db = require('./db');

module.exports.getFullPipeline = async (pipelineId) => {
    const { rows } = await db.query(`
    SELECT
        pipelines.pipeline_id,
        pipelines.name as pipeline_name,
        pipelines.config,
        stages.stage_id,
        stages.name as stage_name
    FROM pipelines
    INNER JOIN stages
        ON pipelines.pipeline_id = stages.pipeline_id
    WHERE pipelines.pipeline_id = $1;
    `, [pipelineId]);

    const getCards = async (stageId) => {
        const { rows: cardRows } = await db.query(`SELECT * FROM leads WHERE stage_id = $1`, [stageId]);
        const card = cardRows.map(row => {
            return {
                id: String(row.lead_id),
                title: row.first_name + ' ' + row.last_name,
                description: row.address + ', ' + row.city + ', ' + row.state + ' ' + row.zip,
                label: row.label,
                metadata: { 
                    email: row.email,
                    phone: row.phone,
                    address: row.address,
                    city: row.city,
                    state: row.state,
                    zip: row.zip,
                    lead_type: row.lead_type,
                },
                cardColor: '#1E1E1E'
            }
        })
        
        return card;
    }
    
    const data = {
        pipelineId: rows[0].pipeline_id,
        name: rows[0].pipeline_name,
        config: rows[0].config,
        lanes: rows.map(row => {
            return {
                id: String(row.stage_id),
                title: row.stage_name
            }
        })
    }

    //add the cards
    for(let i = 0; i < data.lanes.length; i++) {
        data.lanes[i].cards = await getCards(data.lanes[i].id);
    }

    return data;
}

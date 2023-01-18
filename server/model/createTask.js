const db = require('./db')

const createTask = async (leadId, description, dueDate) => {
    const query = `
        INSERT INTO tasks (lead_id, description, due_date, is_done)
        VALUES ($1, $2, $3, false)
        RETURNING *
    `
    const values = [leadId, description, dueDate]
    const { rows } = await db.query(query, values)
    return rows[0]
}

module.exports = createTask

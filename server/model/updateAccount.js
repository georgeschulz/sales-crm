const db = require ('./db')

const update = (field) => {
    return (
        `UPDATE leads
        SET ${field} = $1
        WHERE lead_id = $2
        RETURNING *;`
    )
}

module.exports.updateFirstName = async (leadId, firstName) => {
    const { rows } = await db.query(update('first_name'), [firstName, leadId])
    return rows[0]
}

module.exports.updateLastName = async (leadId, lastName) => {
    const { rows } = await db.query(update('last_name'), [lastName, leadId])
    return rows[0]
}

module.exports.updateEmail = async (leadId, email) => {
    const { rows } = await db.query(update('email'), [email, leadId])
    return rows[0]
}

module.exports.updatePhone = async (leadId, phone) => {
    const { rows } = await db.query(update('phone'), [phone, leadId])
    return rows[0]
}

module.exports.updateAddress = async (leadId, address) => {
    const { rows } = await db.query(update('address'), [address, leadId])
    return rows[0]
}

module.exports.updateCity = async (leadId, city) => {
    const { rows } = await db.query(update('city'), [city, leadId])
    return rows[0]
}

module.exports.updateState = async (leadId, state) => {
    const { rows } = await db.query(update('state'), [state, leadId])
    return rows[0]
}

module.exports.updateZip = async (leadId, zip) => {
    const { rows } = await db.query(update('zip'), [zip, leadId])
    return rows[0]
}

module.exports.updateLeadType = async (leadId, leadType) => {
    const { rows } = await db.query(update('lead_type'), [leadType, leadId])
    return rows[0]
}

module.exports.updateSource = async (leadId, source) => {
    const { rows } = await db.query(update('source'), [source, leadId])
    return rows[0]
}

module.exports.updateStage = async (leadId, stage) => {
    const { rows } = await db.query(update('stage'), [stage, leadId])
    return rows[0]
}

module.exports.updatePipeline = async (leadId, pipeline) => {
    const { rows } = await db.query(update('pipeline'), [pipeline, leadId])
    return rows[0]
}

module.exports.updateUserId = async (leadId, userId) => {
    const { rows } = await db.query(update('user_id'), [userId, leadId])
    return rows[0]
}

module.exports.updateSetupPayment = async (leadId, setupPayment) => {
    const { rows } = await db.query(update('setup_payment'), [setupPayment, leadId])
    return rows[0]
}

module.exports.setupInitial = async (leadId, setupInitial) => {
    const { rows } = await db.query(update('setup_initial'), [setupInitial, leadId])
    return rows[0]
}

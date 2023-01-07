const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASEPASSWORD,
    port: process.env.DATABASEPORT,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
}
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
app.use(express.static('public'));
const db = require('./model/db');
const pipelineRouter = require('./routes/pipeline');
const leadRouter = require('./routes/leads');
const cors = require('cors');
const bodyParser = require('body-parser');

if(process.env.NODE_ENV != 'production') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/pipeline', cors({ credentials: true, origin: 'http://localhost:3000' }), pipelineRouter);
app.use('/leads', cors({ credentials: true, origin: 'http://localhost:3000' }), leadRouter);

app.use(express.static('../client/build'));
app.listen(port, () => console.log(`App listening on port ${port}!`));

require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
app.use(express.static('public'));

if(process.env.NODE_ENV != 'production') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}

app.use(express.static('../client/build'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App listening on port ${port}!`));

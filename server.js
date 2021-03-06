const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const movies = require('./routes/api/posts');

const app = express();

app.use(bodyParser.json());

//database configuration
const db = require('./config/keys').mongoURI;

mongoose.connect(db)
    .then(() => console.log('database connected'))
    .catch(err => console.log(err));

app.use('/api/posts', movies);


const port = process.env.PORT || 8080;

app.listen(port, () => console.log('server started on port 8080'));
const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());


const port = process.env.PORT || 8080;

app.listen(port, () => console.log('server started on port 8080'));
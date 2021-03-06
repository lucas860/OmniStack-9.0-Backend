const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const path = require('path');

const routes = require('../src/routes');

const app = express();

mongoose.connect('mongodb+srv://omni:root@cluster0-epqb9.mongodb.net/omni09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connected to DB'));

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333, () => console.log('Server Up and Running'));

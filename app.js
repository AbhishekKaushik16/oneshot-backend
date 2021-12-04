const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const cors = require('cors');

// ROUTES
const routes = require('./routes/routes');
app.use(cors())

app.use('/', routes);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },
    () => {
        console.log('Connected to MongoDB ');
});

app.listen(process.env.PORT || 4000, function () {
    console.log('Node app is working!');
});

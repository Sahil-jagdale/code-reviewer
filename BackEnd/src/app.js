const express = require('express');
require('dotenv').config()
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express();
app.use(cors())

app.use(express.json());

app.get('/',(req,res) => {
    res.send('hello World')
})
app.use('/ai',aiRoutes);

module.exports = app;
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const catalogRoutes = require('./routes/catalog.routes.js');

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/products', catalogRoutes);


mongoose.connect('mongodb+srv://admin:admin@platzi.uqhhv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=platzi')
.then(() => {
    console.log('Connected to database');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
    
})
.catch(() => {
    console.log('DB connection failed');
})
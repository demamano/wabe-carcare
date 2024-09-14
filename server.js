// entry point for the server
// This file is responsible for setting up the server and connecting to the database
// It also sets up the routes for the server

// Importing the required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Importing the routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Setting up the express app
const app = express();

// Setting up the port
const PORT = process.env.PORT || 3000;

// Setting up the database connection
mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

// Setting up the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting up the cors
app.use(cors());

// Setting up the morgan
app.use(morgan('dev'));

// Setting up the routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Exporting the app
module.exports = app;

// End of server.js
// The server is now setup and running on the specified port
// The server is now connected to the database
// The routes are also setup and the server is now ready to accept requests
// The server is now ready to be used
// The server is now running and ready to accept requests
// The server is now running and ready to accept requests
// The server is now running and ready to accept requests
// The server is now running and ready to accept requests
// The server is now running and ready to accept requests
// The server is now running and ready to accept requests
const Hapi = require('hapi');
const productRoutes = require('./routes/product.routes');
const mongoose = require('mongoose');

// Connection to MongoDB Database
mongoose.connect('mongodb://localhost:27017/hapi_db');
mongoose
    .connection
    .on('connected', () => {
        console.log('Connected to MongDB!');
    });
mongoose
    .connection
    .on('error', (err) => {
        console.log('Error while connecting to mongDB', err);
    });

// Init Server
const server = new Hapi.Server({port: 8000, host: 'localhost'});

// Add a Route
server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Welcome to HAPI API';
    }
});

// Dynamic Route
server.route(productRoutes)

// Start server
const start = async() => {
    try {
        // await server.register(require('inert')); // Serve Static Files
        await server.start();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

    // Serve Static Files server.route({     method: 'GET',     path: '/about',
    // handler: (request, h) => {         return h.file('./public/about.html');
    // } });

    console.log('Server running at:', server.info.uri);
}

start();

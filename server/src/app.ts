'use strict';
const Hapi = require('@hapi/hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Pack = require('../../package.json');
const { createDatabase, dropDatabase } = require("./config/database");
import { connectSequelize, disconnectSequelize } from "./config/sequelize";
import { createTables } from "./config/tables";
import routes from "./routes/index"


/**
 * An async initializer that creates server on port 3000.
 */
const startServer = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    //adding routes
    server.route(routes);

    //adding swagger
    const swaggerOptions = {
        info: {
            title: 'Shop API Documentation',
            version: Pack.version
        },
    };

    //Register all the plugins
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    await server.start();
    console.log('[Server running on %s]', server.info.uri);

    //Internal function calls
    // await createDatabase();
    // await createTables();
    await connectSequelize();
};

/**
 * Emits an event whenever a promise is rejected and catches error
 */
process.on('unhandledRejection', async (err) => {

    console.log(err);
    await disconnectSequelize();
    process.exit(1);
});

/**
 * Starting the server.
 */
startServer().then(() => {
    console.log('[Server Started.]');
});
'use strict';
const Hapi = require('@hapi/hapi');
const { createDatabase } = require("./config/database");
import {connectSequelize, disconnectSequelize} from "./config/sequelize";


/**
 * An async initializer that creates server on port 3000.
 */
const startServer = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.start();
    console.log('[Server running on %s]', server.info.uri);

    //Internal function calls
    // await createDatabase();
    // await connectSequelize();

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
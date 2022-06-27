'use strict';
const { Sequelize } = require('sequelize');

/**
 * Instantiating a sequelize object.
 *
 * @remarks
 * Notice the username and password may vary according to system.
 */
export const sequelizeDB = new Sequelize('shopDB', '', '', {
    host: 'localhost',
    dialect: 'postgres'
});

/**
 * An async function that checks a connection of sequelize to the database.
 * @function connectSequelize
 * @returns void
 */
export async function connectSequelize(): Promise<void> {
    try {
        await sequelizeDB.authenticate();
        console.log('Connection to database established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database.', err);
    }
}

/**
 * An async function that closes the connection of sequelize to the database.
 * @function disconnectSequelize
 * @returns void
 */
export async function disconnectSequelize(): Promise<void> {
    try {
        await sequelizeDB.close();
        console.log('Connection to database has been closed successfully.');
    } catch (err) {
        console.error('Unable to close database.', err);
    }
}

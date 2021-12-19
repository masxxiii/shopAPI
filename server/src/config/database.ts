'use strict';
const tools = require('pgtools');

/**
 * A config object containing the credentials for postgres.
 *
 * @remarks
 * Notice the username and password may vary according to system.
 */
const config = {
    user: '',
    password: '',
    port: 5432,
    host: 'localhost'
}

/**
 * Creates a database 'shopDB' in the system.
 * @function createDatabase
 * @returns void
 */
export function createDatabase(): void {
    tools.createdb(config, 'shopDB', function (err: Error, res: Response) {
        if (err) {
            console.error(err);
            process.exit(-1);
        }
        console.log(res);
    });
}

/**
 * Drops a database 'shopDB' from the system.
 * @function dropDatabase
 * @returns void
 */
export function dropDatabase(): void {
    tools.dropdb(config, 'courseworkDB', function (err: Error, res: Response) {
        if (err) {
            console.error(err);
            process.exit(-1);
        }
        console.log(res);
    });
}
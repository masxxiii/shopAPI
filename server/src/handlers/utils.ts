'use strict';
import {Boom} from "@hapi/boom";

/**
 * Function for throwing error.
 * @function error
 * @param code - Error code.
 * @param msg - Message to be printed.
 * @param data - Object to be sent.
 * @returns Boom
 */
export function error(code: number, msg: string, data: object): Boom {
    return new Boom(msg, {
        data: {
            code,
            data,
            api: true,
        },
        statusCode: Math.floor(code / 1000),
    });
}
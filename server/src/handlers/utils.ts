'use strict';
import { Boom } from "@hapi/boom";
import { OutputInterface } from "./Interfaces";

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

/**
 * Function for returning an output.
 * @function error
 * @param res - Return object or null.
 * @returns Object
 */
export const output = (res?: object): OutputInterface => ({
    ok: true,
    result: res,
});
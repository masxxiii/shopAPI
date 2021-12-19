'use strict';
import { Boom } from "@hapi/boom";
import { OutputInterface } from "./Interfaces";
import { error } from "./utils";
import { Brand } from "../models/brand";
import { Product } from "../models/product";
import { Manager } from "../models/manager";
import { Employee } from "../models/employee";
import { Order } from "../models/order";

/**
 * Async function that returns Brands.
 * @function getBrands
 * @returns Object|Boom
 */
export const getBrands = async ()
    : Promise< OutputInterface | Boom> => {
    try {
        return await Brand.findAll();
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in getting Brands",{});
    }
 }

/**
 * Async function that returns Products.
 * @function getProducts
 * @returns Object|Boom
 */
export const getProdcuts = async ()
    : Promise< OutputInterface | Boom> => {
    try {
        return await Product.findAll();
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in getting Products",{});
    }
}

/**
 * Async function that returns Managers.
 * @function getManagers
 * @returns Object|Boom
 */
export const getManagers = async ()
    : Promise< OutputInterface | Boom> => {
    try {
        return await Manager.findAll();
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in getting Managers",{});
    }
}

/**
 * Async function that returns Managers.
 * @function getEmployees
 * @returns Object|Boom
 */
export const getEmployees = async ()
    : Promise< OutputInterface | Boom> => {
    try {
        return await Employee.findAll();
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in getting Employees",{});
    }
}

/**
 * Async function that returns Orders.
 * @function getOrders
 * @returns Object|Boom
 */
export const getOrders = async ()
    : Promise< OutputInterface | Boom> => {
    try {
        return await Order.findAll();
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in getting Orders",{});
    }
}
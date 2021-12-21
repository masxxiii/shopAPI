'use strict';
import { Boom } from "@hapi/boom";
import {BrandFilter, EmployeeFilter, OutputInterface} from "./Interfaces";
import { error } from "./utils";
import { Brand } from "../models/brand";
import { Product } from "../models/product";
import { Manager } from "../models/manager";
import { Employee } from "../models/employee";
import { Order } from "../models/order";
import {RequestOrig} from "hapi";

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

/**
 * Async function that returns Brand's name and country by id.
 * @function getBrandsFilter
 * @returns Object|Boom
 */
export const getBrandsFilter = async ({ payload, }: RequestOrig)
    : Promise< OutputInterface | Boom> => {
    const { id } = <BrandFilter> payload;

    try {
        return await Brand.findOne({
            where: { id, },
            attributes: ['Name', 'country'],
        });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in finding Brand.",{});
    }
}

/**
 * Async function that returns Employees' name and country by Manager's id.
 * @function getEmployeeFilter
 * @returns Object|Boom
 */
export const getEmployeeFilter = async ({ payload, }: RequestOrig)
    : Promise< OutputInterface | Boom> => {
    const { ManagerId } = <EmployeeFilter> payload;

    try {
        return await Employee.findAll({
            where: { ManagerId, },
            attributes: ['Name', 'Surname'],
        });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in finding Employees",{});
    }
}
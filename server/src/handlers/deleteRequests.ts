'use strict';
import { Boom } from "@hapi/boom";
import { Brand } from "../models/brand";
import { Product } from "../models/product";
import { Manager } from "../models/manager";
import { Employee } from "../models/employee";
import { Order } from "../models/order";
import { error, output } from "./utils";
import { RequestOrig } from "hapi";
import {PostBrand, PostEmployee, PostManager, PostOrder, PostProduct, RemoveItem} from "./Interfaces";

/**
 * Async function that deletes a Brand.
 * @function deleteBrand
 * @returns Object|Boom
 */
export const deleteBrand = async ({ payload, }: RequestOrig)
    : Promise< Object | Boom> => {

    const { id } = <RemoveItem> payload;

    try {
        const brand = await Brand.findOne({ where: { id, } });
        brand?.destroy();
        brand.save();
        return output({ message: 'Brand deleted successfully' });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in deleting Brand",{});
    }
}

/**
 * Async function that deletes a Product.
 * @function deleteProduct
 * @returns Object|Boom
 */
export const deleteProduct = async ({ payload, }: RequestOrig)
    : Promise< Object | Boom> => {

    const { id } = <RemoveItem> payload;

    try {
        const product = await Product.findOne({ where: { id, }});
        product?.destroy();
        product.save();
        return output({ message: 'Product deleted successfully' });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in deleting Product",{});
    }
}

/**
 * Async function that deletes a Manager.
 * @function deleteManager
 * @returns Object|Boom
 */
export const deleteManager = async ({ payload, }: RequestOrig)
    : Promise< Object | Boom> => {

    const { id } = <RemoveItem> payload;

    try {
        const manager = await Manager.findOne({ where: { id, }});
        manager?.destroy();
        manager.save();
        return output({ message: 'Manager deleted successfully' });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in deleting Manager",{});
    }
}

/**
 * Async function that deletes an Employee.
 * @function deleteEmployee
 * @returns Object|Boom
 */
export const deleteEmployee = async ({ payload, }: RequestOrig)
    : Promise< Object | Boom> => {

    const { id } = <RemoveItem> payload;

    try {
        const employee = await Employee.findOne({ where: { id, } });
        employee?.destroy();
        employee.save();
        return output({ message: 'Employee deleted successfully' });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in deleting Employee",{});
    }
}

/**
 * Async function that deletes an Order.
 * @function deleteOrder
 * @returns Object|Boom
 */
export const deleteOrder = async ({ payload, }: RequestOrig)
    : Promise< Object | Boom> => {

    const { id } = <RemoveItem> payload;

    try {
        const order = await Order.findOne({ where: { id, } });
        order?.destroy();
        order.save();
        return output({ message: 'Order deleted successfully' });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in deleting Order",{});
    }
}
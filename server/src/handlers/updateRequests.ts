'use strict';
import { Boom } from "@hapi/boom";
import { Brand } from "../models/brand";
import { Product } from "../models/product";
import { Manager } from "../models/manager";
import { Employee } from "../models/employee";
import { Order } from "../models/order";
import { error, output } from "./utils";
import { RequestOrig } from "hapi";
import { PostBrand, PostEmployee, PostManager, PostOrder, PostProduct } from "./Interfaces";

/**
 * Async function that updates a Brand.
 * @function updateBrand
 * @returns Object|Boom
 */
export const updateBrand = async ({ payload, }: RequestOrig)
    : Promise< Object | Boom> => {

    const { id, Name, country, rating } = <PostBrand> payload;

    try {
        await Brand.update({
            id,
            Name,
            country,
            rating
        });
        return output({ message: 'Brand updated successfully' });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in updating Brand",{});
    }
}

/**
 * Async function that updates a Product.
 * @function updateProduct
 * @returns Object|Boom
 */
export const updateProduct = async ({ payload, }: RequestOrig)
    : Promise< Object | Boom> => {

    const { id, BrandId, Name, supplier } = <PostProduct> payload;

    try {
        await Product.update({
            id,
            BrandId,
            Name,
            supplier
        });
        return output({ message: 'Product updated successfully' });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in updating Product",{});
    }
}

/**
 * Async function that updates a Manager.
 * @function updateManager
 * @returns Object|Boom
 */
export const updateManager = async ({ payload, }: RequestOrig)
    : Promise< Object | Boom> => {

    const { id, Name, Surname, Age } = <PostManager> payload;

    try {
        await Manager.update({
            id,
            Name,
            Surname,
            Age
        });
        return output({ message: 'Manager updated successfully' });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in updating Manager",{});
    }
}

/**
 * Async function that updates an Employee.
 * @function updateEmployee
 * @returns Object|Boom
 */
export const updateEmployee = async ({ payload, }: RequestOrig)
    : Promise< Object | Boom> => {

    const { id, ManagerId, Name, Surname, Age } = <PostEmployee> payload;

    try {
        await Employee.update({
            id,
            ManagerId,
            Name,
            Surname,
            Age
        });
        return output({ message: 'Employee updated successfully' });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in updating Employee",{});
    }
}

/**
 * Async function that updates an Order.
 * @function updateOrder
 * @returns Object|Boom
 */
export const updateOrder = async ({ payload, }: RequestOrig)
    : Promise< Object | Boom> => {

    const { id, EmployeeId, ProductId, total } = <PostOrder> payload;

    try {
        await Order.update({
            id,
            EmployeeId,
            ProductId,
            total
        });
        return output({ message: 'Order update successfully' });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in updating Order",{});
    }
}
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
 * Async function that adds a Brand.
 * @function postBrand
 * @returns Object|Boom
 */
export const postBrand = async ({ params, }: RequestOrig)
    : Promise< Object | Boom> => {

    const { id, Name, country, rating } = <PostBrand> params;

    try {
        await Brand.create({
            id,
            Name,
            country,
            rating
        });
        return output({ message: 'Brand created successfully' });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in creating a Brand",{});
    }
}

/**
 * Async function that adds a Product.
 * @function postProduct
 * @returns Object|Boom
 */
export const postProduct = async ({ params, }: RequestOrig)
    : Promise< Object | Boom> => {

    const { id, BrandId, Name, supplier } = <PostProduct> params;

    try {
        await Product.create({
            id,
            BrandId,
            Name,
            supplier
        });
        return output({ message: 'Product created successfully' });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in creating a Product",{});
    }
}

/**
 * Async function that adds a Manager.
 * @function postManager
 * @returns Object|Boom
 */
export const postManager = async ({ params, }: RequestOrig)
    : Promise< Object | Boom> => {

    const { id, Name, Surname, Age } = <PostManager> params;

    try {
        await Manager.create({
            id,
            Name,
            Surname,
            Age
        });
        return output({ message: 'Manager created successfully' });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in creating a Manager",{});
    }
}

/**
 * Async function that adds a Employee.
 * @function postEmployee
 * @returns Object|Boom
 */
export const postEmployee = async ({ params, }: RequestOrig)
    : Promise< Object | Boom> => {

    const { id, ManagerId, Name, Surname, Age } = <PostEmployee> params;

    try {
        await Employee.create({
            id,
            ManagerId,
            Name,
            Surname,
            Age
        });
        return output({ message: 'Employee created successfully' });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in creating an Employee",{});
    }
}

/**
 * Async function that adds a Order.
 * @function postOrder
 * @returns Object|Boom
 */
export const postOrder = async ({ params, }: RequestOrig)
    : Promise< Object | Boom> => {

    const { id, EmployeeId, ProductId, total } = <PostOrder> params;

    try {
        await Order.create({
            id,
            EmployeeId,
            ProductId,
            total
        });
        return output({ message: 'Order created successfully' });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in creating an Order",{});
    }
}
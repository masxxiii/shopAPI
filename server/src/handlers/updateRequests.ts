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
        const brand = await Brand.findOne({ where: { id, } });
        brand.set({
            Name,
            country,
            rating,
        })
        brand.save();
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
        const product = await Product.findOne({ where: { id, }});
        product.set({
            BrandId,
            Name,
            supplier
        });
        product.save();
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
        const manager = await Manager.findOne({ where: { id, }});
        manager.set({
            Name,
            Surname,
            Age
        });
        manager.save();
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
        const employee = await Employee.findOne({ where: { id, } });
        employee.set({
            ManagerId,
            Name,
            Surname,
            Age
        });
        employee.save();
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
        const order = await Order.findOne({ where: { id, } });
        order.set({
            EmployeeId,
            ProductId,
            total
        });
        order.save();
        return output({ message: 'Order update successfully' });
    } catch (e) {
        console.log('[ERROR]',e);
        return error(5000, "Error in updating Order",{});
    }
}
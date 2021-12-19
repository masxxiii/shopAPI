'use strict';
import { DataTypes } from "sequelize";
import { Brand } from "../models/brand";
import { Product } from "../models/product";
import {Manager} from "../models/manager";
import {Employee} from "../models/employee";
import {Order} from "../models/order";

/**
 * An async function that synchronizes Brands table.
 * @function createBrandsTable
 * @returns void
 */
async function createBrandsTable(): Promise<void> {
    Brand.hasMany(Product, {
        foreignKey: {
            type: DataTypes.UUID,
            allowNull: false
        }
    });
    await Brand.sync();
}

/**
 * An async function that synchronizes Products table.
 * @function createProductsTable
 * @returns void
 */
async function createProductsTable(): Promise<void> {
    Product.hasMany(Order, {
        foreignKey: {
            type: DataTypes.UUID,
            allowNull: false
        }
    });
    await Product.sync();
}

/**
 * An async function that synchronizes Managers table.
 * @function createManagersTable
 * @returns void
 */
async function createManagersTable(): Promise<void> {
    Manager.hasMany(Employee, {
        foreignKey: {
            type: DataTypes.UUID,
            allowNull: false
        }
    });
    await Manager.sync();
}

/**
 * An async function that synchronizes Employees table.
 * @function createEmployeesTable
 * @returns void
 */
async function createEmployeesTable(): Promise<void> {
    Employee.hasMany(Order, {
        foreignKey: {
            type: DataTypes.UUID,
            allowNull: false
        }
    });
    await Employee.sync();
}

/**
 * An async function that synchronizes Orders table.
 * @function createEmployeesTable
 * @returns void
 */
async function createOrdersTable(): Promise<void> {
    await Order.sync();
}

/**
 * An async function that creates tables by calling all functions above.
 * @function createTables
 * @returns void
 */
export async function createTables(): Promise<void> {
    await createBrandsTable();
    await createProductsTable();
    await createManagersTable();
    await createEmployeesTable();
    await createOrdersTable();
}
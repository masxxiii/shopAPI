'use strict';
import { DataTypes } from "sequelize";
import { Brand } from "../models/brand";
import { Product } from "../models/product";

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
    await Product.sync();
}

/**
 * An async function that creates tables by calling all functions above.
 * @function createTables
 * @returns void
 */
export async function createTables(): Promise<void> {
    await createBrandsTable();
    await createProductsTable();
}
'use strict';
import { BrandSchema, EmployeeSchema, ManagerSchema, OrderSchema, ProductSchema } from "../schemas/schemas";
import { updateBrand, updateEmployee, updateManager, updateOrder, updateProduct } from "../handlers/updateRequests";

export default [
    {
        method: 'PUT',
        path: '/api/post/brands',
        handler: updateBrand,
        options: {
            description: 'This endpoint will update brand data',
            tags: ['api', 'update_route'],
            validate: {
                payload: BrandSchema,
            },
        },
    },
    {
        method: 'PUT',
        path: '/api/post/products',
        handler: updateProduct,
        options: {
            description: 'This endpoint will update product data',
            tags: ['api', 'update_route'],
            validate: {
                payload: ProductSchema,
            },
        },
    },
    {
        method: 'PUT',
        path: '/api/post/managers',
        handler: updateManager,
        options: {
            description: 'This endpoint will update manager data',
            tags: ['api', 'update_route'],
            validate: {
                payload: ManagerSchema,
            },
        },
    },
    {
        method: 'PUT',
        path: '/api/post/employees',
        handler: updateEmployee,
        options: {
            description: 'This endpoint will update employee data',
            tags: ['api', 'update_route'],
            validate: {
                payload: EmployeeSchema,
            },
        },
    },
    {
        method: 'PUT',
        path: '/api/post/order',
        handler: updateOrder,
        options: {
            description: 'This endpoint will update order data',
            tags: ['api', 'update_route'],
            validate: {
                payload: OrderSchema,
            },
        },
    },
];
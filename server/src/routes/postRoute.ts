'use strict';
import { BrandSchema, EmployeeSchema, ManagerSchema, OrderSchema, ProductSchema } from "../schemas/schemas";

export default [
    {
        method: 'POST',
        path: '/api/post/brands',
        handler: '',
        options: {
            description: 'This endpoint will post brand data',
            tags: ['api', 'post_route'],
            validate: {
                payload: BrandSchema,
            },
        },
    },
    {
        method: 'POST',
        path: '/api/post/products',
        handler: '',
        options: {
            description: 'This endpoint will post product data',
            tags: ['api', 'post_route'],
            validate: {
                payload: ProductSchema,
            },
        },
    },
    {
        method: 'POST',
        path: '/api/post/managers',
        handler: '',
        options: {
            description: 'This endpoint will post manager data',
            tags: ['api', 'post_route'],
            validate: {
                payload: ManagerSchema,
            },
        },
    },
    {
        method: 'POST',
        path: '/api/post/employees',
        handler: '',
        options: {
            description: 'This endpoint will post employee data',
            tags: ['api', 'post_route'],
            validate: {
                payload: EmployeeSchema,
            },
        },
    },
    {
        method: 'POST',
        path: '/api/post/order',
        handler: '',
        options: {
            description: 'This endpoint will post order data',
            tags: ['api', 'post_route'],
            validate: {
                payload: OrderSchema,
            },
        },
    },
];
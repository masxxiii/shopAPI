'use strict';
import { BrandSchema, EmployeeSchema, ManagerSchema, OrderSchema, ProductSchema } from "../schemas/schemas";
import { postBrand, postEmployee, postManager, postOrder, postProduct } from "../handlers/postRequests";

export default [

    {
        method: 'POST',
        path: '/api/post/products',
        handler: postProduct,
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
        handler: postManager,
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
        handler: postEmployee,
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
        handler: postOrder,
        options: {
            description: 'This endpoint will post order data',
            tags: ['api', 'post_route'],
            validate: {
                payload: OrderSchema,
            },
        },
    },
];

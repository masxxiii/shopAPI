'use strict';
import {
    getBrands,
    getBrandsFilter,
    getEmployeeFilter,
    getEmployees,
    getManagers,
    getOrders,
    getProdcuts
} from "../handlers/getRequests";
import * as Joi from 'joi';

export default [
    {
        method: 'GET',
        path: '/api/get/brands',
        handler: getBrands,
        options: {
            description: 'This endpoint will fetch a list of brands',
            tags: ['api', 'get_route'],
        }
    },
    {
        method: 'GET',
        path: '/api/get/products',
        handler: getProdcuts,
        options: {
            description: 'This endpoint will fetch a list of products',
            tags: ['api', 'get_route'],
        }
    },
    {
        method: 'GET',
        path: '/api/get/managers',
        handler: getManagers,
        options: {
            description: 'This endpoint will fetch a list of managers',
            tags: ['api', 'get_route'],
        }
    },
    {
        method: 'GET',
        path: '/api/get/employees',
        handler: getEmployees,
        options: {
            description: 'This endpoint will fetch a list of employees',
            tags: ['api', 'get_route'],
        }
    },
    {
        method: 'GET',
        path: '/api/get/orders',
        handler: getOrders,
        options: {
            description: 'This endpoint will fetch a list of orders',
            tags: ['api', 'get_route'],
        }
    },
    {
        method: 'GET',
        path: '/api/get/filter/brands',
        handler: getBrandsFilter,
        options: {
            description: 'This endpoint will fetch unique brand name and country by id',
            tags: ['api', 'get_route_filter'],
            validate: {
                payload: Joi.object({
                    id: Joi
                        .string()
                        .required()
                        .example('4f530883-2851-43ef-8104-09a61c69b8ac'),
                }),
            },
        }
    },
    {
        method: 'GET',
        path: '/api/filter/employees',
        handler: getEmployeeFilter,
        options: {
            description: 'This endpoint will fetch employee name and surname by manager id',
            tags: ['api', 'get_route_filter'],
            payload: Joi.object({
                ManagerId: Joi
                    .string()
                    .required()
                    .example('4f530883-2851-43ef-8104-09a61c69b8ac'),
            }),
        }
    },
];
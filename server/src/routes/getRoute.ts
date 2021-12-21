'use strict';
import {
    getBrands,
    getBrandsFilter,
    getEmployeeFilter,
    getEmployees,
    getManagers,
    getOrders,
    getProducts
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
        handler: getProducts,
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
        path: '/api/get/{id}/brands',
        handler: getBrandsFilter,
        options: {
            description: 'This endpoint will fetch unique brand name and country by id',
            tags: ['api', 'get_route'],
            validate: {
                params: Joi.object({
                    id: Joi.string().required()
                }),
            }
        }
    },
    {
        method: 'GET',
        path: '/api/{ManagerId}/employees',
        handler: getEmployeeFilter,
        options: {
            description: 'This endpoint will fetch employee name and surname by manager id',
            tags: ['api', 'get_route'],
            validate: {
                params: Joi.object({
                    ManagerId: Joi.string().required()
                }),
            }
        }
    },
];
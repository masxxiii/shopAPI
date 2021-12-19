'use strict';

import {getBrands, getEmployees, getManagers, getOrders, getProdcuts} from "../handlers/getRequests";

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
];
'use strict';

export default [
    {
        method: 'GET',
        path: '/api/get/brands',
        handler: '',
        options: {
            description: 'This endpoint will fetch a list of brands',
            tags: ['api', 'get_route'],
        }
    },
    {
        method: 'GET',
        path: '/api/get/products',
        handler: '',
        options: {
            description: 'This endpoint will fetch a list of products',
            tags: ['api', 'get_route'],
        }
    },
    {
        method: 'GET',
        path: '/api/get/managers',
        handler: '',
        options: {
            description: 'This endpoint will fetch a list of managers',
            tags: ['api', 'get_route'],
        }
    },
    {
        method: 'GET',
        path: '/api/get/employees',
        handler: '',
        options: {
            description: 'This endpoint will fetch a list of employees',
            tags: ['api', 'get_route'],
        }
    },
    {
        method: 'GET',
        path: '/api/get/orders',
        handler: '',
        options: {
            description: 'This endpoint will fetch a list of orders',
            tags: ['api', 'get_route'],
        }
    },
];
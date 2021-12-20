'use strict';
import * as Joi from "joi";
import { deleteBrand, deleteEmployee, deleteManager, deleteOrder, deleteProduct } from "../handlers/deleteRequests";

export default [
    {
        method: 'DELETE',
        path: '/api/delete/brands',
        handler: deleteBrand,
        options: {
            description: 'This endpoint will post brand data',
            tags: ['api', 'delete_route'],
            validate: {
                payload: Joi.object({
                    id: Joi
                        .string()
                        .required()
                        .example('4f530883-2851-43ef-8104-09a61c69b8ac')}),
            },
        },
    },
    {
        method: 'DELETE',
        path: '/api/delete/products',
        handler: deleteProduct,
        options: {
            description: 'This endpoint will post product data',
            tags: ['api', 'delete_route'],
            validate: {
                payload: Joi.object({
                    id: Joi
                        .string()
                        .required()
                        .example('4f530883-2851-43ef-8104-09a61c69b8ac')}),
            },
        },
    },
    {
        method: 'DELETE',
        path: '/api/delete/managers',
        handler: deleteManager,
        options: {
            description: 'This endpoint will post manager data',
            tags: ['api', 'delete_route'],
            validate: {
                payload: Joi.object({
                    id: Joi
                        .string()
                        .required()
                        .example('4f530883-2851-43ef-8104-09a61c69b8ac')}),
            },
        },
    },
    {
        method: 'DELETE',
        path: '/api/delete/employees',
        handler: deleteEmployee,
        options: {
            description: 'This endpoint will post employee data',
            tags: ['api', 'delete_route'],
            validate: {
                payload: Joi.object({
                    id: Joi
                        .string()
                        .required()
                        .example('4f530883-2851-43ef-8104-09a61c69b8ac')}),
            },
        },
    },
    {
        method: 'DELETE',
        path: '/api/delete/order',
        handler: deleteOrder,
        options: {
            description: 'This endpoint will post order data',
            tags: ['api', 'delete_route'],
            validate: {
                payload: Joi.object({
                    id: Joi
                        .string()
                        .required()
                        .example('4f530883-2851-43ef-8104-09a61c69b8ac')}),
            },
        },
    },
];
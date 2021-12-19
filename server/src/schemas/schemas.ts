import * as Joi from 'joi';

export const BrandSchema = Joi.object({
    id: Joi.string().required().example('82892e71-d363-4f7f-8344-3d2d3932675b'),
    name: Joi.string().required().example('CocaCola'),
    country: Joi.string().required().example('USA'),
    rating: Joi.number().required().example('5'),
});

export const ProductSchema = Joi.object({
    id: Joi.string().required().example('82892e71-d363-4f7f-8344-3d2d3932675b'),
    brandId: Joi.string().required().example('82892e71-d363-4f7f-8344-3d2d3932675b'),
    name: Joi.string().required().example('Coke'),
    supplier: Joi.string().required().example('Moscow'),
});

export const ManagerSchema = Joi.object({
    id: Joi.string().required().example('82892e71-d363-4f7f-8344-3d2d3932675b'),
    name: Joi.string().required().example('Andrey'),
    surname: Joi.string().required().example('Makov'),
    age: Joi.string().required().example('40'),
});

export const EmployeeSchema = Joi.object({
    id: Joi.string().required().example('82892e71-d363-4f7f-8344-3d2d3932675b'),
    managerId: Joi.string().required().example('82892e71-d363-4f7f-8344-3d2d3932675b'),
    name: Joi.string().required().example('Sergey'),
    surname: Joi.string().required().example('Mikan'),
    age: Joi.string().required().example('40'),
});

export const OrderSchema = Joi.object({
    id: Joi.string().required().example('82892e71-d363-4f7f-8344-3d2d3932675b'),
    employeeId: Joi.string().required().example('82892e71-d363-4f7f-8344-3d2d3932675b'),
    productId: Joi.string().required().example('82892e71-d363-4f7f-8344-3d2d3932675b'),
    total: Joi.string().required().example('10000'),
});
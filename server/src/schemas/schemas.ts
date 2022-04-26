import * as Joi from 'joi';

export const BrandSchema = Joi.object({
    id: Joi.string().required().example('82892e71-d363-4f7f-8344-3d2d3932675b'),
    Name: Joi.string().required().example('CocaCola'),
    country: Joi.string().required().example('USA'),
    rating: Joi.number().required().example('5'),
});

export const ProductSchema = Joi.object({
    id: Joi.string().required().example('bd26a2ed-87bb-4034-86d1-3c2769f5bf01'),
    BrandId: Joi.string().required().example('82892e71-d363-4f7f-8344-3d2d3932675b'),
    Name: Joi.string().required().example('Coke'),
    supplier: Joi.string().required().example('Moscow'),
});

export const ManagerSchema = Joi.object({
    id: Joi.string().required().example('09a84ec2-5486-47c4-b451-d38ec47b742c'),
    Name: Joi.string().required().example('Andrey'),
    Surname: Joi.string().required().example('Makov'),
    Age: Joi.string().required().example('40'),
});

export const EmployeeSchema = Joi.object({
    id: Joi.string().required().example('65640d43-526f-45da-b86b-c34f431f1159'),
    ManagerId: Joi.string().required().example('09a84ec2-5486-47c4-b451-d38ec47b742c'),
    Name: Joi.string().required().example('Sergey'),
    Surname: Joi.string().required().example('Mikan'),
    Age: Joi.string().required().example('40'),
});

export const OrderSchema = Joi.object({
    id: Joi.string().required().example('4f530883-2851-43ef-8104-09a61c69b8ac'),
    EmployeeId: Joi.string().required().example('65640d43-526f-45da-b86b-c34f431f1159'),
    ProductId: Joi.string().required().example('bd26a2ed-87bb-4034-86d1-3c2769f5bf01'),
    total: Joi.string().required().example('10000'),
});

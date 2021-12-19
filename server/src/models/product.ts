const { DataTypes } = require('sequelize');
import { sequelizeDB } from "../config/sequelize";

export const Product = sequelizeDB.define('Product', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    BrandId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    supplier: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    timestamps: false
})
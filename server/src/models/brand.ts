const { DataTypes } = require('sequelize');
import { sequelizeDB } from "../config/sequelize";

export const Brand = sequelizeDB.define('Brand', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    timestamps: false
})
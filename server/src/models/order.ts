const { DataTypes } = require('sequelize');
import { sequelizeDB } from "../config/sequelize";

export const Order = sequelizeDB.define('Order', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    EmployeeId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    ProductId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    total: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
},{
    timestamps: false
})

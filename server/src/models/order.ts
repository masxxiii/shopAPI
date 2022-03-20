const { DataTypes } = require('sequelize');
import { sequelizeDB } from "../config/sequelize";

export const Order = sequelizeDB.define('Order', {

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

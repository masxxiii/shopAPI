const { DataTypes } = require('sequelize');
import { sequelizeDB } from "../config/sequelize";

export const Employee = sequelizeDB.define('Employee', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    ManagerId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    timestamps: false
})
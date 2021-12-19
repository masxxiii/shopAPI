const { DataTypes } = require('sequelize');
import { sequelizeDB } from "../config/sequelize";

export const Manager = sequelizeDB.define('Manager', {
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
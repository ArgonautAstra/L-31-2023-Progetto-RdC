const { Sequelize, DataTypes, Model } = require('sequelize');
const database = require("src/Backend/db/Db")


export default class Files extends Model{}

Files.init({
    namefile:{
        type: DataTypes.STRING,
        allowNull: false
    },
    path:{
        type: DataTypes.STRING,
        allowNull: false
    }
    },
    {


    })
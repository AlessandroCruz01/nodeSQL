const Sequelize = require('sequelize') //Sequelize com "S" maiusculo, pois o sequelize é uma classe
const dbConfig = require('../config/databaseConfig')

const User = require('../models/User')
const connection = new Sequelize(dbConfig) //Conexao com o bd
User.init(connection)

module.exports = connection
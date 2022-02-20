const Sequelize = require('sequelize') //Sequelize com "S" maiusculo, pois o sequelize é uma classe
const dbConfig = require('../config/databaseConfig')

//Para cada novo model, criamos um novo init, ou podemos usar o (consign) -> Ja vi no webModerno
const User = require('../models/User')
const Address = require('../models/Address')
const Tech = require('../models/Tech')
const Desktop = require('../models/Desktop')

const connection = new Sequelize(dbConfig) //Conexao com o bd

User.init(connection)
Address.init(connection)
Tech.init(connection)
Desktop.init(connection)


User.associate(connection.models)
Address.associate(connection.models)
Desktop.associate(connection.models)

module.exports = connection
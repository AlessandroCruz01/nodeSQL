const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(connection){
    super.init({
      //campos da nossa tabela
      name: DataTypes.STRING,
      email: DataTypes.STRING
    }, {
      //conexao com o bd
      sequelize: connection
    })
  }
}

module.exports = User
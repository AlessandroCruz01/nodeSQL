//Para cada table temos um model
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

  static associate(models){
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' }) //um usuario tem mtos enderecos
    this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs'})
  }

}

module.exports = User
//Para cada table temos um model
const { Model, DataTypes } = require('sequelize')

class Tech extends Model {
  static init(connection){
    super.init({
      //campos da nossa tabela
      name: DataTypes.STRING,
    }, {
      //conexao com o bd
      sequelize: connection,
      tableName: 'techs'
    })
  }

  //relacionamento
  static associate(model){
    this.belongsToMany(model.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users'})
  }
}

module.exports = Tech
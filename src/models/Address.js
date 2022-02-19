//Para cada table temos um model
const { Model, DataTypes } = require('sequelize')

class Address extends Model {
  static init(connection){
    super.init({
      //campos da nossa tabela
      zipcode: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER
    }, {
      //conexao com o bd
      sequelize: connection
    })
  }

  //relacionamento
  static associate(model){
    this.belongsTo(model.User, {//Pertence á

      foreignKey: 'user_id',
      as: 'user' //Apelido deste relacionamento

    })
  }
}

module.exports = Address
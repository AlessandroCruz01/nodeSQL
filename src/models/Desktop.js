//Para cada table temos um model
const { Model, DataTypes } = require('sequelize')

class Desktop extends Model {
  static init(connection){
    super.init({
      have : DataTypes.BOOLEAN,
      model: DataTypes.STRING
    }, {
      sequelize: connection,
      tableName: 'desktop'

    })
  }

  static associate(model){
    this.belongsTo(model.User, {
      foreignKey: 'user_id',
      as: 'users'
    })
  }
}

module.exports = Desktop
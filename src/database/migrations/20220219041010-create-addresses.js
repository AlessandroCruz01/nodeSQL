'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      zipcode: { //CEP
        type: Sequelize.STRING,
        allowNull: false
      },
      street: { //rua
        type: Sequelize.STRING,
        allowNull: false
      },
      number: { 
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }, 

      //Campo de relacionamento, um endereco pertence a um usuario
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'users', key: 'id'}, // FK - referencia na tabela users no campo id
        onUpdate: 'CASCADE', //Sempre que há alteração no relacionamento vai refletir aqui!
        onDelete: 'CASCADE' //Se o usuario for deletado, o endereco vai junto!
      },

    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('addresses')
  }
};

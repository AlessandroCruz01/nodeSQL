'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('desktop', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      have: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }, 
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'users', key: 'id'},
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE' 
      },
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('desktop')
  }
};


const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
  async show (req, res){
    //Encontrar todos os usuarios com email @gmail.com
    //Desses usuarios, buscar todos que moram na "Rua da parada"
    //Desses usuarios, buscar todos que dominem tecnologias que começam com react

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%@gmail.com'
        }
      },
      include: [
        { association: 'addresses', where: {street: 'Rua da parada'} }, //Endereços
        { association: 'techs', required: false,  where: { name: { [Op.iLike]: '%react%' }} } //tecnologias
      ]
    })

    return res.json(users)

  }
}
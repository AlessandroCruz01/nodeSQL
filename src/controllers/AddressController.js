const User = require('../models/User')
const Address = require('../models/Address')

module.exports = {
  //Metodo busca com id (get)
  async index(req, res) {
    const { user_id } = req.params

    //Verificando se usuario existe
    const user = await User.findByPk(user_id, {
      include: { association: 'addresses'}
    })

    return res.json(user)
  },

  //metodo para buscar todos os enderecos (get)
  async general(req, res) {
    const addresses = await Address.findAll(); //busca todos os dados

    return res.json(addresses)//devolve em json
  },



  //Metodo cadastro (post)
  async store(req, res  ) {
    const { user_id } = req.params
    const { zipcode, street, number } = req.body

    //Verificando se usuario existe
    const user = await User.findByPk(user_id)
    if (!user){
      return res.status(400).json({ error: 'User not found' })
    }

    const address = await Address.create({

      zipcode,
      street,
      number,
      user_id

    })

    return res.json(address)

  }
}
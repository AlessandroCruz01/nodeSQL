const User = require('../models/User')
const Desktop = require('../models/Desktop')

module.exports = {

  async index(req, res) {
    const { user_id } = req.params

    //Verificando se usuario existe
    const user = await User.findByPk(user_id, {
      include: { association: 'desktops'}
    })

    return res.json(user)
  },

  async store(req, res ) {
    const { user_id } = req.params
    const { have, model } = req.body

    const user = await User.findByPk(user_id)
    if (!user){
      return res.status(400).json({ error: 'User not found' })
    }

    const desks = await Desktop.create({
      have,
      model,
      user_id
    })

    return res.json(desks)

  }
}
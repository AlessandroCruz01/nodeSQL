//Esse modulo, lida com as requisicoes e devolve respostas
const User = require('../models/User')
module.exports = {
  //metodo p buscar todos os usuarios (get)
  async index(req,res){
    const users = await User.findAll(); //busca todos os dados

    return res.json(users)//devolve em json
  },


  //metodo p cadastro (post)
  async store(req, res) {
    const{ name, email } = req.body; //dados da requisicao

    const user = await User.create({ name, email }) //joga no bd

    return res.json(user) //devolve um json
  }
}
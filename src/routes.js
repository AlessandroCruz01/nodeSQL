const express = require('express');

//controllers
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')
const TechController = require('./controllers/TechController')

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/users/:user_id/addresses', AddressController.index) //Rota de busca para usuario especifico
routes.get('/users/addresses', AddressController.general) //Rota para todos os enderecos
routes.post('/users/:user_id/addresses', AddressController.store) //Rota especifica para usuario citado

routes.get('/users/:user_id/techs', TechController.index) 
routes.post('/users/:user_id/techs', TechController.store) 
routes.delete('/users/:user_id/techs', TechController.delete) 

module.exports = routes;
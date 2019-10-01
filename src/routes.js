//acessar a rota
//req = requisição pro servidor, 
//contendo as informações, parametros, auth, usuario
//res, é a resposta da requisição 

const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
routes.get('/products', ProductController.index );
routes.get('/products/all', ProductController.all );
routes.get('/products/:id', ProductController.show );
routes.post('/products/add', ProductController.store );
routes.put('/products/edit/:id', ProductController.update );
routes.delete('/products/delete/:id', ProductController.destroy );

const UserController = require('./controllers/UserController');
routes.get('/user', UserController.index );
routes.get('/user/:id', UserController.show );
routes.post('/user/add', UserController.store );
routes.put('/user/edit/:id', UserController.update );
routes.delete('/user/delete/:id', UserController.destroy );


module.exports = routes;
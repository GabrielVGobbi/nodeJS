# Comandos

### CMD 
 
	- Mkdir (Criar pasta).

### BackEnd

	- yarn init -y
	- code . 
	- yarn add express.
	- node server.js (Iniciando a aplicação).
	- yarn add nodemon -D (-D informa que a dependecia não vai ser para a produção)
	- yarn dev (servidor vai ficar ouvindo).

## Arquivo package.json 

	"scripts": { 
    	"dev": "nodemon src/server.js"
  	},
	- yarn dev


### Express 
	
	- Define rotas,
	- app.get ()

### Server.js
```bash
const express = require('express');

const app = express();

//  Rotas.
//  Req (Requisições).
//  Res (Resposta).

//  GET, POST, PUT, DELETE 
//  req.query   = Acessar query (Filtros).
//  req.params  = 
app.get('/', (req, res) => {
    //return res.json({message: "Hello World"});
    //return res.json({idade: req.query.idade});
});

app.put('/user/id', (req, res) => {
    return res.json({id: req.params.id});
});

//Acessar a Aplicação com o localHOST
app.listen(3333);
```

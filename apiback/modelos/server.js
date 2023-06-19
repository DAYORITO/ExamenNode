const express = require('express');
const dbConnection = require('../baseDatos/config')
const cors = require('cors');

class Server {
    constructor(){
        this.port = process.env.PORT;
        this.schemasPath = '/api/schema'
        this.app = express();
        this.middleware();
        this.routes();
        this.dbConnection();
    }
    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(){
        this.app.use(this.schemasPath, require('../rutas/hurto'));
    }
    async dbConnection(){
        await dbConnection();
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Escuchando puerto', this.port);
        });
    }
    

}
module.exports = Server;
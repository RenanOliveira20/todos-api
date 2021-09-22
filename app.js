const express = require ('express');
const connect = require('./Config/db-config');
const cors = require ('cors');
const todoRoutes = require('./Routes/todo.routes')

//connect data base
connect();

const app = express();

app.use(express.json());
app.use(cors())

app.use('/', todoRoutes)

app.listen(5000, ()=> console.log('server rodando na porta 5000'))
const express = require("express");
const jsonServer = require("json-server");
const cors = require("cors");
const middlewares = jsonServer.defaults();

const app = express();
const port = process.env.PORT || 10000;

const router = jsonServer.router('./public/db.json');
app.use(middlewares);
app.use(router);

app.use(express.static(__dirname));
app.get('/', function(req, res){
    res.sendFile(__dirname +'/public/index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
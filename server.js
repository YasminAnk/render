const express = require("express");
const app = express();
const port = process.env.PORT || 10000;

const jsonServer = require("json-server");
const router = jsonServer.router("./db.json");

app.use(express.static(__dirname));

app.use(router);


app.get('/', function(req, res){
    res.sendFile(__dirname +'index.html');
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

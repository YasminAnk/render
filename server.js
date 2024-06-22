const express = require("express");
const app = express();
const port = process.env.PORT || 10000;

app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.sendFile(__dirname +'index.html');
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

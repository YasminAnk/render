const express = require("express");
const app = express();
const port = process.env.PORT || 10000;

app.get('/', function(req, res){
    res.sendFile('index.html', {
     root: './'
   })
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

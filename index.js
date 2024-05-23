const express = require("express");

const app = express();



app.get("/sobre/:nome/:cargo", function(req,res) {
    //res.send("Pagina Sobre Mim");
    res.send("ola " + req.params.nome + " o seu cargo e " + req.params.cargo)
})


app.get("/", function(req,res) {
    res.sendFile(__dirname + "/html/index.html");
})









app.listen(1000,function () {
    console.log("Ola Mundono")
    
})
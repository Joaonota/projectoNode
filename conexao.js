const Sequelize = require('sequelize');

const sequelize = new Sequelize('sga', 'root','root',{
host:"localhost",
dialect:"mysql"

});


const postagem = sequelize.define('postagem',{
    titulo:{
        type:Sequelize.STRING
    },
    detalhe:{
        type:Sequelize.STRING
    }

}, function(require, factory) {
    'use strict';
    
});
sequelize.authenticate().then(
    function () {
        console.log("banco de dados conectado com suceso")
    }
).catch(
    function (erro) {
        console.log("falha ao acessar a DB" + erro)
    }
);
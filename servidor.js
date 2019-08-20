const porta = 3003 // sempre quando for trabalhar em servidor prescisa de uma porta 
const filtro = require('./lista') // estou importando as informações da lista
const express = require('express') // constante que vai receber 
const app = express() // variavel para fazer requisiçao tranferencia

// funções para serem utilizada na aplicação tanto get push 
//gerenciamenot de acesso cors == compartilhamento de recursos entre origens 

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
});
//função para acesso dos filtros
app.get('/', function (req, res, next){

    res.send(filtro.resultado);
});
//Configuração de funcionamento do app na porta 3003, conforme linha1.
app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}.`)
})

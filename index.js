import express from "express";

const host  = "0.0.0.0";
const porta = 3000;
const app = express(); // todas as interfaces de rede do computador 

function paginaIncial(requisicao, resposta){
    resposta.send(`<h1> Seja Bem Vindo digite a tabuada que deseja procurar </h1>
                    <h2> Exemplo http://localhost/?tabuada=3&sequencia=25;</h2>
                    <br/>

        `);
}


app.get("/", paginaIncial);

app.listen(porta, host, () =>{
    console.log("Servidor em execução http://" + host + ":" + porta);
});
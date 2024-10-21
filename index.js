import express from "express";

const host  = "0.0.0.0";
const porta = 3000;
const app = express(); // todas as interfaces de rede do computador 

app.get("/", paginaIncial);

function paginaIncial(requisicao, resposta){
    resposta.send(`<h1> Seja Bem Vindo digite a tabuada que deseja procurar </h1>
                    <h2> Exemplo http://localhost/?tabuada=3&sequencia=25;</h2>
                    <br/>

        `);
}


app.get("/tabuada",tabuada);

function tabuada(requisicao, resposta){
    const tabuada = parseInt(requisicao.query.tabuada);
    const sequencia = parseInt(requisicao.query.sequencia);

    if (isNaN(tabuada) || isNaN(sequencia)) {
        resposta.write('<h1>Erro: Insira valores numéricos válidos para "tabuada" e "sequencia".</h1>');
        resposta.end();
        return;
    }

    resposta.write(`<h1>Tabuada do ${tabuada}</h1>`);
    resposta.write("<ul>");

    for (let i = 0; i <= sequencia; i++) {
        resposta.write(`<li>${tabuada} x ${i} = ${tabuada * i}</li>`);
    }

    resposta.write("</ul>");
    resposta.end();
}











app.listen(porta, host, () =>{
    console.log("Servidor em execução http://" + host + ":" + porta);
});
import express from "express";

const host = "0.0.0.0";
const porta = 3000;
const app = express(); 



// Rota para calcular e exibir a tabuada
app.get("/", tabuada);

function tabuada(requisicao, resposta) {
    const tabuada = parseInt(requisicao.query.tabuada);
    const sequencia = parseInt(requisicao.query.sequencia);

    if (isNaN(tabuada) || isNaN(sequencia) || sequencia < 0) {
        resposta.write('<h1>Erro: Insira valores numéricos válidos para "tabuada" e "sequencia".</h1>');
        resposta.end();
        return;
    }

    resposta.write(`<h1>Tabuada do ${tabuada}</h1>`);
    resposta.write("<ul>");

    // O laço agora vai de 0 até o valor informado em `sequencia`
    for (let i = 0; i <= sequencia; i++) {
        resposta.write(`<li>${tabuada} x ${i} = ${tabuada * i}</li>`);
    }

    resposta.write("</ul>");
    resposta.end();
}

// Inicia o servidor
app.listen(porta, host, () => {
    console.log(`Servidor em execução: http://${host}:${porta}`);
});

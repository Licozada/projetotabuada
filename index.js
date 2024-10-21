import express from "express";

const host = "0.0.0.0";
const porta = 3000;
const app = express();

app.get("/", tabuada);

function tabuada(requisicao, resposta) {
    const tabuada = parseInt(requisicao.query.tabuada);
    const sequencia = parseInt(requisicao.query.sequencia) || 10; // Define 10 se não for passado nenhum valor

    resposta.setHeader('Content-Type', 'text/html');
    resposta.write(`<h1>Tabuada do ${tabuada}</h1>`);
    resposta.write("<ul>");

    // Gera a tabuada até o valor de `sequencia`
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

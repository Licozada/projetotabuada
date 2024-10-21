import express from "express";

const host = "0.0.0.0";
const porta = 3000;
const app = express(); 

// Rota principal com instruções
app.get("/", paginaInicial);

function paginaInicial(requisicao, resposta) {
    resposta.send(`
        <h1>Seja Bem-Vindo! Digite a tabuada que deseja procurar</h1>
        <h2>Exemplo: <a href="/Tabuada?tabuada=3&sequencia=25">http://localhost:3000/Tabuada?tabuada=3&sequencia=25</a></h2>
    `);
}

// Rota para calcular e exibir a tabuada
app.get("/Tabuada", tabuada);

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

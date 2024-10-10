import { pegarCss } from "./comum.js";

async function criarGraficoTancredo(){
    const url = 'https://raw.githubusercontent.com/BIALINDAA/2024-API-ex/refs/heads/main/tancredo.json'; 
    const res = await fetch(url);
    const dados = await res.json();

    const comidasVotadas = dados.slice(1).map( comidas => comidas[2])
    
    const contagemComidas = comidasVotadas.reduce((acc, comidasVotadas) => {
        acc[comidasVotadas] = (acc[comidasVotadas] || 0) + 1
        return acc
    }, {})

    const valores = Object.values(contagemComidas)
    const etiqueta = Object.keys(contagemComidas)

    const data = [
        {
            values: valores,
            labels: etiqueta,
            type:"pie",
            textinfo: "label + percent"
        }
    ]

    const layout = {
        plot_bgcolor: pegarCss('--verde'),
        paper_bgcolor: pegarCss('--sage'),
        font: {
                color: pegarCss('--verde-musgo'),
                family: pegarCss('--fonte-titulo'),
                size: 20
    }

}

const pesquisaTitulo = document.createElement('h3')
pesquisaTitulo.classList.add('caixa-grafico__texto')
pesquisaTitulo.innerHTML = `As comidas mais votadas no Colégio <span>Tancredo</span>`

const grafico = document.createElement('div')
grafico.className = "grafico-disco"
document.getElementById("caixa-grafico").appendChild(pesquisaTitulo)
document.getElementById('caixa-grafico').appendChild(grafico)
const config = {
    responsive: true,
    displayModeBar: false
}

Plotly.newPlot(grafico, data, layout, config)

const caixa = document.getElementById('caixa-grafico')
const paragrafo = document.createElement('p')
paragrafo.classList.add('caixa-grafico__texto')
paragrafo.innerHTML = 'A comida mais votada no colégio <span>Tancredo</span> é bem diferente da que é mais consumida no mundo. Enquanto a galera lá escolheu, com 6 votos, o <span>Strogonoff</span> como o favorito, a pesquisa global mostrou que a <span>Churrasco</span> foi a mais desejada de 2023.'
caixa.appendChild(paragrafo)
}

criarGraficoTancredo()

async function criaGraficoBarra(){
    const url = "https://raw.githubusercontent.com/TINHOLINDO/json-grafico-barras/refs/heads/main/tinho%20json"
    const res = await fetch(url)
    const dados = await res.json()
    const modelo = Object.keys(dados)
    const vendas = Object.values(dados)

    const data = [
        {
        x: modelo,
        y: vendas,
        type: 'bar'
        }
    ]


const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('caixa-grafico').appendChild(grafico)
Plotly.newPlot(grafico, data)

}

criaGraficoBarra()
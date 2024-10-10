async function criarGraficoBarra() {
    const url = "https://raw.githubusercontent.com/BIALINDAA/2024-API-ex/refs/heads/main/grafico"; 
    const res = await fetch(url);
    const dados = await res.json();
    
    const comidas = dados.map(item => item.nome);
    const votos = dados.map(item => item.votos);

    const data = [
        {
            x: comidas,
            y: votos,
            type: "bar"
        }
    ]
    
    const grafico = document.createElement("div");
    grafico.className = "grafico";
    document.getElementById("caixa-grafico").appendChild(grafico);
    Plotly.newPlot(grafico, data);
}

criarGraficoBarra();

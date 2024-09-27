const url = "https://raw.githubusercontent.com/TINHOLINDO/pesquisa/refs/heads/main/celulares.json"

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()
    const celularMaisVendido = dados.marcas_de_celulares[0].nome
    const modelo = dados.marcas_de_celulares[0].modelo_popular

    console.log(modelo)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico__texto')
    paragrafo.innerHTML = `Em busca de descobrir os jogos mais vendidos em 2023, foi feita uma série de pesquisas em diferentes fontes. Com o auxilio da IA do google, foi possível estimar que o jogo mais vendido foi <span>${celularMaisVendido}</span> com um total de aproximadamente <span>${modelo}</span> nas plataformas <span>${modelo}</span>`

    const caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)
}

vizualizarInformacoes()
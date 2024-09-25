const url = "https://raw.githubusercontent.com/TINHOLINDO/pesquisa/refs/heads/main/celulares.json"

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()

    console.log(dados[0].titulo)
}

vizualizarInformacoes()
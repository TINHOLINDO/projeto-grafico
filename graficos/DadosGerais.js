const url = 'https://raw.githubusercontent.com/BIALINDAA/2024-API-ex/refs/heads/main/grafico%202';

async function visualizarInfos() {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Erro ao buscar os dados');

        const dados = await res.json();
        const comidaMaisConsumida = dados[0].comida; 
        const numeroVotos = dados[0].votos;
        const comentario = dados[0].comentario;

        const paragrafo = document.createElement("p");
        paragrafo.classList.add("caixa-grafico__texto");
        paragrafo.innerHTML = `Essa pesquisa buscou fazer um levantamento das comidas mais consumidas pelo mundo. Com o auxílio da inteligência artificial, foi possível concluir que a comida <span>${comidaMaisConsumida}</span> ficou em primeiro lugar, com aproximadamente <span>${numeroVotos}</span> votos. O principal comentário a respeito da comida foi: <span>${comentario}</span>`;

        const caixa = document.getElementById("caixa-grafico");
        caixa.appendChild(paragrafo);
    } catch (error) {
        console.error('Erro:', error);
    }
}

visualizarInfos();

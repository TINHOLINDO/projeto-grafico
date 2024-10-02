function pegarCSS(variavel) {
    return getComputedStyle(document.body).getPropertyValue(variavel);
}

const configuraEixo = {
    color: pegarCSS('--cor-para-eixo') // Substitua '--cor-para-eixo' pela variável CSS correta
};

export { pegarCSS, configuraEixo };

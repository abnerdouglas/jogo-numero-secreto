const menorValor = 1
const maiorValor = 100
const numeroAleatorio = gerarNumeroAleatorio()
const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')
const elementoChute = document.getElementById('chute')

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log("Número secreto:", numeroAleatorio)

elementoMenorValor.innerHTML = menorValor

elementoMaiorValor.innerHTML = maiorValor

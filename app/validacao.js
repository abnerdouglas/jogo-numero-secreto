function validarChute(chute) {
    const numero = +chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += `<div> Valor Inválido. </div>`
    } 

    if(numeroForaDoLimite(numero)) {
        elementoChute.innerHTML += `<div> Valor fora dos limites. O valor precisa estar entre ${menorValor} e ${maiorValor}. </div>`
    }

    if(numero == numeroAleatorio) {
        document.body.innerHTML =  
        `<h1> Voce acertou! </h1>
        <h3> O número secreto era ${numeroAleatorio} </h3>
        <button type="submit" onClick="reiniciar()">Jogar Novamente</button>`
    }

    if(numero != numeroAleatorio && !numeroForaDoLimite(numero) && !chuteInvalido(numero)) {
        if(numero >= numeroAleatorio) {
            elementoChute.innerHTML += `<div> Tente um valor Menor </div>`
        } 
        else {
            elementoChute.innerHTML += `<div> Tente um valor Maior </div>`
        }
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaDoLimite(numero) {
    return numero > maiorValor || numero < menorValor
}

function reiniciar() {
    window.location.reload();
}


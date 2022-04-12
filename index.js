/*================================Entrega - Funções e Arrays==============================================*/
function positions (primeiroLugar, segundoLugar, ultimoLugar) {

    let colocacoes = [primeiroLugar, segundoLugar, ultimoLugar]

        if(ultimoLugar === "Daniel"){
            colocacoes = [ultimoLugar, primeiroLugar, segundoLugar]
        }
        if(segundoLugar === "Daniel"){
            colocacoes = [segundoLugar, primeiroLugar, ultimoLugar]
        }

    return `1º Colocado ${colocacoes[0]}, 2º colocado ${colocacoes[1]}, 3º colocado ${colocacoes[2]}`
}

console.log(positions("Rafael", "Daniel", "Manoel"))
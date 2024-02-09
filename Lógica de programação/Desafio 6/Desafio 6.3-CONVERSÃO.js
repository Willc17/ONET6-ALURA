function converterDolarParaReal(valorEmDolar){
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2); //retorna o valor em reais, com 2 casas decimais
}

let valorEmDolar = 100;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a ${valorEmReais} reais!`);
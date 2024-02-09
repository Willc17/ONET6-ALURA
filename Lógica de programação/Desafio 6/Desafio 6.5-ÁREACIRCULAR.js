function calcularAreaPerimetroSalaCircular (raio){
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log(`A área da sala circula é: ${area} metros quadrados.`);
    console.log(`O perímetro da sala circular é: ${perimetro} metros.`);
}

let raio = 6 //metros
calcularAreaPerimetroSalaCircular(raio);



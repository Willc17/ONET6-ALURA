function calcularAreaPerimetroSalaRetangular (altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log(`A área da sala é: ${area} metros quadrados`);
    console.log(`O perímetro da sala é: ${perimetro} metros `);
}

let altura = 5;
let largura = 8;
calcularAreaPerimetroSalaRetangular(altura, largura);
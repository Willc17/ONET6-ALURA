function calcularMedia(nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media
    }
function verificarAprovacao(media){
    return media >=5 ? 'Aprovado' : 'Reprovado';
}
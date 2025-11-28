// Imprimir números pares de 0 a 20 utilizando o loop while

// let volta = 0; //inicializacaoa

// let opcaoEscolhida = parseInt(prompt("Digite 1 para continuar"))
// //condicao
// while (opcaoEscolhida !== 10) {
//     opcaoEscolhida = parseInt(prompt("Você precisa digitar 1 para continuar"));
// }

let numero = 0;

while (numero <= 20){
    if (numero % 2 === 0) {
        console. log(numero);
    }
    numero++;
}
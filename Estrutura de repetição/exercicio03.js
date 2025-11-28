// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let tabuadaEscolhida = parseInt(prompt("Digite o número da tabuada desejada: "));

//1 numero dentro da condicao do for - inicializacao - variavel
//2 numeros dentro da condicao do for - condicao - verificar a volta da variavel
//3 numeros dentro da condicao do for - incremento - soma as voltas
//i++ = i = i+1

console.log(` ============= TABUADA ${tabuadaEscolhida} ============= `);

for(let i = 1; i <= 10; i++){
console.log(tabuadaEscolhida + " x " + i + " = " + (tabuadaEscolhida * i ));
}

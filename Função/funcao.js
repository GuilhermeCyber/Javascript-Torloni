function exibirTabuada(){
    let numero = parseInt(prompt("Digite um número para ver a tabuada:"));


console.log (`=======TABUADA ${numero}=======`)

for (let i = 1; i <= 10; i++) {
    console.log(numero + "x" + i + "=" + (numero * i ));
}

}

exibirTabuada();

function exibirTabuada(){
    let nomesolicitado = prompt("digite seu nome ");

return nomesolicitado;
}

function exibirnomesolicitado(){
    
}

// let nome = exibirTabuada();

// alert(nome)

function somaDoisNumeros(numero1, numero2){

    console.log(numero1+numero2);
}

somaDoisNumeros(10,10);

//Crie função para o exercicio 08 de Estrutura Condicional.
//Passe via parametro o peso e a altura.

let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));

// chamar a função
calcularIMC(peso, altura);

calcularIMC(peso, altura * altura)
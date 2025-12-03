//1
function calcularIMC(){
let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

let imc = peso / (altura * altura);

let classificacao = "";

if (imc < 18.5) {
    alert("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
     alert("Peso normal");
} else if (imc >= 25.0 && imc <= 29.9) {
     alert("Sobrepeso");
} else if (imc >= 30.0 && imc <= 34.9) {
     alert("Obesidade grau 1");
} else if (imc >= 35.0 && imc <= 39.9) {
     alert("Obesidade grau 2");
} else {
    alert("Obesidade grau 3");
}
}

//2
function conferirSequencial(){
let n1 = Number ( prompt(" Digite o primeiro número da sua sequência"));
let n2 = Number ( prompt(" Digite o segundo número da sua sequência"));
let n3 = Number ( prompt(" Digite o terceiro número da sua sequência"));


if ( n1 < n2 && n2 < n3 ) {
     alert(" Os números estão em ordem crescente");
} 
if(n1 > n2 && n2 > n3) {
     alert(" Os números estão em ordem decrescente")
}
else{
     alert("Os números estão em ordem aleatórioa")
}
}

//3
function descontoMercado(params) {
    let valorCompra = parseFloat(prompt("Digite o valor total da compra: "));

let desconto = 0;

if (valorCompra <= 100) {
    desconto = 0;
} else if (valorCompra <= 200) {
    desconto = valorCompra * 0.10;
} else {
    desconto = valorCompra * 0.20;
}

let valorFinal = valorCompra - desconto;

alert("Valor da compra: R$ " + valorCompra.toFixed(2) +
      "\nDesconto aplicado: R$ " + desconto.toFixed(2) +
      "\nValor final a pagar: R$ " + valorFinal.toFixed(2));
}

//4
function diasDaSemana(params) {
   
let input = prompt("Digite um número de 1 a 7 para saber o dia da semana")

if (input === null || input.trim() === "") {
    console.log("Reinicie e digite o número.");
} else

    numerododia = parseInt(input)
switch (numerododia) {
    case 1:
        diadasemana = "Segunda"
        break;

    case 2:
        diadasemana = "Terça"
        break;

    case 3:
        diadasemana = "Quarta"
        break;

    case 4:
        diadasemana = "Quinta"
        break;

    case 5:
        diadasemana = "Sexta"
        break;

    case 6:
        diadasemana = "Sabádo"
        break;

    case 7:
        diadasemana = "Domingo"
        break;


    default:
        diadasemana = "Digite um número inteiro de 1 a 7"
        break;
}

console.log("Resultado das verificações do dia da semana")
console.log("Número digital: " + input);
console.log("Dia da semana: " + diadasemana)
}

//5
function numeroImparPar(params) {
    let numero = parseInt(prompt("Digite qualquer número que você quiser:"));

if (numero % 2 === 0) {
    alert("O número " + numero + " é PAR.");
} else {
    alert("O número " + numero + " é ÍMPAR.");
}
}
// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

let idade = parseInt(prompt("Digite sua idade:"));

while (idade < 18) {
    idade = parseInt(prompt("Idade inválida! Você precisa ter 18 anos ou mais.\nDigite novamente sua idade:"));
}
if(idade >= 18){
    alert("Parabéns! Você tem mais de 18 anos.");
}

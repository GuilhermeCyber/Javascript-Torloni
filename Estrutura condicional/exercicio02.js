
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
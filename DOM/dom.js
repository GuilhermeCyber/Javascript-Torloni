//DOM é a arvore/fluxo do mru documento HTML;
//Ele serve para que o JS consiga manipular (visualizar, editar, crair e excluir);
//O DOM ele torna os elementos HTML em objetos para que o JS consiga acesssar de fato;

// let elementoBody = document.getElementsByTagName("body");

// console.log(elementoBody);

//Elemento h1
let elementoH1 = document.getElementsByTagName("h1");

console.log(elementoH1);

//Acessando o elemento pela posição

console.log(elementoH1[0].textContent);

//console.log();


//exibe o id tecnica


//exibe os elementos que possuem a class jogador

//exibe po item 4 dos elementos que possuem a class jogador

//muda o texto dop conteudo do item da 3 posicao dos elementos que possuem a class jogador


//-------------exibe o id tecnica------------
let tecnicaLeandra = document.getElementById("tecnica");

console.log(tecnicaLeandra);

//---------exibe os elementos que possuem a class jogador----------
let jogadores = document.getElementsByClassName("jogador");

console.log(jogadores)

//-------------exibe po item 4 dos elementos que possuem a class jogador-------------
let quatroJogadores = document.getElementsByClassName("jogador");

console.log(quatroJogadores[4].textContent);

//---muda o texto do conteudo do item da 3 posicao dos elementos que possuem a class jogador---
let exibeClass = document.getElementsByClassName("jogador")
exibeClass[3].textContent = "Oie"

//------mudar a estilizacao de um elemeneto-----
tecnicaLeandra.style.color = "red";
tecnicaLeandra.style.fontSize = "50px";

//----mude a cor da fonte do item da 3 posicao dos elementos que possuem a class jogador----
exibeClass[3].style.color = "red"
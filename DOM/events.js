//Eventos sao interacoes do usuario com o website e também comportamentos do website,
//por exemplo carregar a tela

let elementoBtn = document.getElementById("btn");
let elementoIdLeandra = document.getElementById("tecnica");
let novoElemento = document.createElement("a");
novoElemento.textContent = "link";
novoElemento.href = "https://www.fieltorcedor.com.br/";

elementoBtn.addEventListener("click", () => {
    // alert("Você clicou no botão");

    // elementoBtn.style.backgroundColor = "grey";

    document.body.appendChild(novoElemento);
    // console.log(document.body.children);

    document.body.children[1].removeChild(elementoIdLeandra);
})
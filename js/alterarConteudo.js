let title = document.querySelector("#title");

// inner
title.innerHTML = "Este é o texto alterado"
// faz a alteração do texto da variável title

//textContent
let subtitle = document.querySelector(".subtitle");
subtitle.textContent = "Testando o textContent"
// igual ao innerHTML

function mudar(){
    subtitle.textContent = "novo subtitulo"
}

let teste = prompt()
if(teste == "ola"){
    mudar()
}else{
    alert("texto nao alterado")
}
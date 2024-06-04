let minhaDiv = document.querySelector("#div1")
minhaDiv.addEventListener("mouseenter", entrar)
minhaDiv.addEventListener("mouseout", sair)
minhaDiv.addEventListener("click", clicar)
minhaDiv.addEventListener("contextmenu", clickDireito)
minhaDiv.addEventListener("dblclick", doubleClick)
minhaDiv.addEventListener("mousemove", mover)
minhaDiv.addEventListener("mousedown", apertou)
minhaDiv.addEventListener("mouseup", soltou)

function entrar(){
    minhaDiv.textContent = "Você entrou"
    minhaDiv.style.backgroundColor = "blue"
}

function sair(){
    minhaDiv.textContent = "Você saiu"
    minhaDiv.style.backgroundColor = "red"
}

function clicar(){
    minhaDiv.textContent = "Você clicou"
    minhaDiv.style.backgroundColor = "yellow"
}

function clickDireito(){
    minhaDiv.textContent = "Click direito"
    minhaDiv.style.backgroundColor = "green"
}

function doubleClick(){
    minhaDiv.textContent = "Double Click"
    minhaDiv.style.backgroundColor = "pink"
}

function mover(event){
    let x = event.clientX
    let y = event.clientY
    let res = document.querySelector("span")
    res.textContent = "Posição X:" +x+ " e Y:" +y
}

function apertou(){
    minhaDiv.textContent ="Botão apertado"
    minhaDiv.style.backgroundColor = "aqua"
}

function soltou(){
    minhaDiv.textContent ="Botão solto"
    minhaDiv.style.backgroundColor ="gray"
}


let botao2 = document.querySelector("#botao2")
botao2.addEventListener("mousedown", apertar)
botao2.addEventListener("mouseup", soltar)

function apertar(){
    botao2.textContent = "apertando"
}

function soltar(){
    botao2.textContent = "soltando"
}
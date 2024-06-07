let botao = document.querySelector("#idBotao")
botao.addEventListener("mouseenter", colocar)
botao.addEventListener("mouseout", sair)
botao.addEventListener("click",clicar)
botao.addEventListener("dblclick", double)
botao.addEventListener("contextmenu", direito)
botao.addEventListener("mousedown", pressionar)
botao.addEventListener("mouseup", soltar)
botao.addEventListener("mousemove", mover)
function colocar(){
    botao.style.backgroundColor = "green"
    botao.textContent = "entrou"
}
function sair(){
    botao.style.backgroundColor = "red"
    botao.textContent = "saiu"
}
function clicar(){
    botao.style.backgroundColor = "blue"
    botao.textContent = "clicou"
}
function double(){
    botao.style.backgroundColor = "yellow"
    botao.textContent = "double"
}
function direito(){
    botao.style.backgroundColor = "purple"
    botao.textContent = "direito"
}
function pressionar(){
    botao.style.backgroundColor = "cyan"
    botao.textContent = "pressionando"
}
function soltar(){
    botao.style.backgroundColor = "orange"
    botao.textContent = "soltando"
}

function mover(event){
    let x = event.clientX
    let y = event.clientY
    let res = document.querySelector("span")
    res.textContent = "Posição X: "+x+ "| Posição Y: " +y
}

let desativar = document.querySelector("#idDesativar")
desativar.addEventListener("click", desative)
function desative(){
    botao.removeEventListener("mouseenter", colocar)
    
}




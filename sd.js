let botao = document.querySelector("button")
botao.addEventListener("click", menssgem)
botao.addEventListener("contextmenu", aviso)

function menssgem(){
    let mensagem = document.querySelector("span")
    mensagem.textContent = "obrigado!"
}

function aviso(){
    alert("aperte com o botao esquerdo do mouse")
}
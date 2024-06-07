let nome = document.querySelector("#idNome")
nome.addEventListener("focus", mudarFundo)
nome.addEventListener("blur", voltar)

function mudarFundo() {
    nome.style.backgroundColor ="lightblue"
}

function voltar(event){
    nome.style.backgroundColor = ""
}

let form = document.querySelector("#idForm")
form.addEventListener("submit", sub)


function sub(){
    alert("obrigado por preencher o formulário")
}

let caixa = document.querySelector("#idUsername")
caixa.addEventListener("focus", changeColor)
caixa.addEventListener("blur", back)

function changeColor(){
    caixa.style.backgroundColor = "lightblue"
}

function back(){
    caixa.style.backgroundColor = ""
}

let range = document.querySelector("#idBarra")
range.addEventListener("change", mudar)

function mudar(){
    let valor = document.querySelector("#idValor")
    valor.textContent = range.value
}
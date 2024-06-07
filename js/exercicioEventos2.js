let texto = document.querySelector("input")
texto.addEventListener("keydown", pressionar)
texto.addEventListener("keyup", pressionar2)
function pressionar(){
    let resposta = document.querySelector("span")
    resposta.textContent = texto.value
}
function pressionar2(){
    let resposta2 = document.querySelector("#insta")
    resposta2.textContent = texto.value
}
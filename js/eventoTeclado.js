// let texto = document.querySelector("#idTexto")
// texto.addEventListener("keydown", ()=>{
//     let resultado = document.querySelector("#res")
//     resultado.textContent = texto.value
// })

let texto = document.querySelector("#idTexto")
texto.addEventListener("keydown", atualizarResultado)

function atualizarResultado() {
    let resultado = document.querySelector("#res")
    resultado.textContent = texto.value
}

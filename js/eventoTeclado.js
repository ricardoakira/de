// texto.addEventListener("keydown", atualizarResultado)
// 1° - criação do evento
// 2° - quando ocorre
// 3° - executa a função

// keydown - evento disparado quando uma tecla é pressionada

// let texto = document.querySelector("#idTexto")        a variável texto armazena o que tem no idTexto
// texto.addEventListener("keydown", atualizarResultado) cria um evento que ocorre quando algo é digitado e executa a função atualizarResultado
// function atualizarResultado() {                       função 
//     let resultado = document.querySelector("#resposta")    a variável resultado armazena o que tem no id res que é o span que está dentro do parágrafo
//     resultado.textContent = texto.value               substitui o texto do span(#resposta) pelo texto do input(idTexto), e o .value retorna o valor atual
// }

// keyup - evento disparado quando uma tecla é solta

// let texto = document.querySelector("#idTexto")        
// texto.addEventListener("keyup", atualizarResultado) 
// function atualizarResultado() {                       
//     let resultado = document.querySelector("#resposta")    
//     resultado.textContent = texto.value               
// }

// var range = document.querySelector("#idBarra")
// range.addEventListener("change", ()=>{
//     document.querySelector("#idValor").textContent = range.value
// })

//change - disparado quando o elemnto do conteúdo é alterado

// let range = document.querySelector("#idBarra")     variável range armazena o label
// range.addEventListener("change", move)             cria um evento que ocorre quando o elemento é alterado e executa a função move
// function move(){                                   função
//     let mover = document.querySelector("#idValor") variável mover armazena o que tem no span
//     mover.textContent = range.value                valor do span fica igual ao do range que é o label
// }

// submit

let form = document.querySelector("#idFomr")
form.addEventListener("submit", enviar)
function enviar(){
    alert("Obrigado por preencher nossa pesquisa!")
}
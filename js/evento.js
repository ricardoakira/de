// let btn = document.querySelector("#btn").onclick = function(){
//     alert("Este evento está totalmente no arquivo js!")
// }

// function exemplo(num){
//     return num * num
// }

// console.log(exemplo())

// arrow function = ()=>{}
// let arrow = document.querySelector("#btn").onclick = ()=>{
//     console.log("você clicou")
// }
// faz a mesma função da primeira mas com o código reduzido
// susbstitui o function(){} por ()=>{}

// addEventListener
// mais organizado 
// .addEventListener(evento, function(){})
// dentro do addEventlistener os eventos não se iniciam com "on"

// document.querySelector("#btn").addEventListener("click", function(){
//     alert("asd asd asd asd asd asd ")
// } )

// function botao(){
//     alert("clicou")
// }

// document.querySelector("#btn").addEventListener("click", botao)

// organizando o código com addEventListener
// temos dois eventos no mesmo elemento abaixo
// function click(){
//     alert("clicou")
// }
// function mouseenter(){
//     alert("passou")
// }

// let botao = document.querySelector("#btn")
// botao.addEventListener("click", click)
// botao.addEventListener("mouseenter", mouseenter)

// exemplos
// let botao = document.querySelector("#btn")
// botao.addEventListener("mouseenter", voltar)
// botao.addEventListener("click", mudar)
// let titulo = document.getElementById("titulo")

// function mudar(){
//     titulo.textContent = "titulo alterado com sucesso!"
// }

// function voltar(){
//     titulo.textContent = "Eventos JavaScript"
// }

// removeEventListener
// desativa uma função

// let botao = document.querySelector("#btn")
// botao.addEventListener("click", clicou)
// botao.addEventListener("mouseenter", entrou)
// botao.addEventListener("mouseout", saiu)

// function clicou(){
//     botao.textContent = "clicou não entra e nem sai mais"
//     botao.removeEventListener("mouseenter", entrou)
//     botao.removeEventListener("mouseout", saiu)
// }

// function entrou(){
//     botao.textContent = "entrou"
// }

// function saiu(){
//     botao.textContent = "saiu"
// }

// let botoes = document.querySelectorAll(".item")
// botoes.forEach((item) => {
//     item.addEventListener("click", clicou)
// });
// function clicou(){
//     console.log("clicou")
// }


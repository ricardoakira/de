// alert("")
// abre uma caixa de aviso
// alert("Olá mundo")

// document.write
// aparece o texto na página
// document.write("olá mundo")

// console.log
// aparece o texto dentro do console
// console.log("ola mundo")

/*
Variáveis
let - funciona apenas dentro do bloco, ou seja, não tem um escopo global
var - funmciona dentro e fora do bloco, ou seja, tem um escopo global
const - funcoina dentro e fora mas quando se altera o valor da variável, ocorre um erro
 */

// - - - Variável let - - - 

// let nome; - cria uma variável com valor undefined
// let disciplina = null - cria uma variável com valor null    
// let texto = "ola mundo" - cria a váriavel com um valor

// * Tipos de variáveis *
// int - números inteiros       
// let a = 1

// float - números com casas decimais
// let b = 1.2

// string - variável de texto
// let c = "texto"

// booleano - true or false
// let d = true

// array - conjunto de elementos
// let f = ["java", "asp.net", "javascript"]

// Manipulação de texto e números

// float para int
// let a = 1.2
// console.log(parseInt(a));
// os números depois da virgula não existem mais

// string para float
// let a = "1.2"
// console.log(parseFloat(a))
// retornará o valor 1.2 mas se a variável não for uma string com números, ele retornará NaN

//int ou float para string
// let a = "123"
// console.log(a.toString())
// o valor será o mesmo, mas é possível verificar o tipo da variável com o typeof

// verificar tipo de variável
// let a = 123
// let b = a.toString()
// let verificador = typeof b
// console.log(verificador)
// retornará o valor string através do typeof

// verificar quantos caracteres tem a string
// let a = "123"
// console.log((a.length))

// verificar a posição em que aparece o trecho pela primeira vez
// let a = "123123"
// console.log(a.indexOf("2"))
// retona o posição 1

// verificar a posição em que aparece o trecho pela primeira vez
// let a = "123123"
// console.log(a.lastIndexOf("2"))
// retona o posição 1

// retorna os caracteres da posição inicial e final do número escolhido
// let a = "as provas estão chegando"
// console.log(a.slice(0,3))
// retorna os caracteres "as pr"

// retorna os caracteres da posição inicial e final do número escolhido e é possível escolher os últimos caracteres usando os númeors negativos
// let a = "As provas estão chegando"
// console.log(a.substr(-8,8))

// * Manipulando variáveis e tipos de dados *
// let nome = "mundo"
// document.write("ola " + nome + "!")

// criação de objetos
// let carro = {
//     cor:"preto",
//     numPortas: 4,
//     tipo: "Sedan",
//     modelo: "Onix",
//     marca: "GM",
//     correr: function(){
//         alert("correndo")
//     }
// }
// console.log(carro.modelo);
// carro.correr()

// - - - Estruturar de decisão e reperião - - - 

// * IF *
// usada para verificar se uma função é verdadeira ou falsa
// if(true){
//     "Isntruções que serão realizadas caso seja verdadeiro"
// }
// o if verifica o teste lógico que está dentro dos parênteses e se for verdadeiro executa as isntruções que estão dentro das chaves

// operadores
// >, <, >=, <=, != (diferente), == (igual)

// if(10 > 7){
//     document.write("10 é maior que 7")
// }

// exemplo
// let valor = 10
// if(valor > 7){
//     document.write(valor + " é maior que 7")
// }

// else
// let valor = 10
// if(valor >= 15){
//     document.write(valor + " [e maior ou igual que 15")
// }else{
//     document.write(valor + " é menor que 15")
// }

//else if
// let idade = 19
// if(idade <= 12){
//     document.write("é uma criança")
// }else if(idade <= 17){
//     document.write("é um adolescente")
// }else if(idade <= 29){
//     document.write("é um jovem")
// }else{
//     document.write("é um adulto")
// }

// 1) CONVERTA de float para int usando parseInt OS SEGUINTES NÚMEROS
/*
A) 30.345
B) 154.665
C) 50.888
D) 089.52
*/

// let num = 30.345
// console.log(parseInt(num))

// let num = 154.665
// document.write(parseInt(num))

// let num = 50.888
// alert(parseInt(num))

// let num = 89.52
// let conversao = parseInt(num)
// document.write(conversao)

//) CONVERTA de String para float usando parseFloat OS SEGUINTES NÚMEROS
// A) 30.345
// B) 154.665
// C) 50.888
// D) 089.52

// num = "30.345"
// numFloat = parseFloat(num)
// console.log(numFloat)

// num = "154.665"
// numFloat = parseFloat(num)
// let verificar = typeof numFloat
// document.write(verificar)
// document.write(numFloat)

// num = "50.888"
// let numFloat = parseFloat(num)
// let verificar = typeof numFloat
// alert(verificar)

// let num = 89.52
// let numFloat = parseFloat(num)
// let verificar = typeof numFloat
// document.write(verificar)

// 3) VERIFIQUE O TAMANHO DAS SEQUINTES STRINGS USANDO O LENGTH 
// A) A MAIOR TECNOLOGIA
// B) HARDWARE
// C) FIAP A MELHOR FACULDADE
// D) TENCOLOGIA

// let texto = "a maior tecnologia"
// document.write(texto.length)

// let texto = "hardware"
// let verificar = texto.length
// console.log(verificar)

// let texto = "fiap"
// let verificar = texto.length
// alert(verificar)

// let texto = "texnologia"
// let verficar = texto.length
// document.write(verficar)

// 4) VERIFIQUE A PRIMEIRA POSIÇÃO USANDO indexOf() DOS SEGUINTES VALORES 
// A) A MAIOR TECNOLOGIA
// B) HARDWARE FAZ O COMPUTADOR
// C) FIAP A MELHOR FACULDADE
// D) TENCOLOGIA E INOVAÇÃO

// let texto = "a maior tecnologia"
// console.log(texto.indexOf("a"))

// let texto = "hardware faz o computador"
// let verificar = texto.indexOf("hardware")
// alert(verificar)

// let texto = "fiap a melhor faculdade"
// let verificar = texto.indexOf("a")
// console.log(verificar)

// let texto = "tecnologia e inovação"
// let verificar = texto.indexOf("ã")
// alert(verificar)

// 5) VERIFIQUE O ULTIMO TRECHO DA POSIÇÃO USANDO lastIndexOf()
// A) A MAIOR TECNOLOGIA
// B) HARDWARE FAZ O COMPUTADOR
// C) FIAP A MELHOR FACULDADE
// D) TENCOLOGIA E INOVAÇÃO

// let texto = "a maior texnologia"
// console.log(texto.lastIndexOf("a"))

// let texto = "harware faz o computador"
// let verificar = texto.lastIndexOf("r")
// alert(verificar)

// let texto = "fiap a melhor faculdade"
// let verificar = texto.lastIndexOf("p")
// document.write(verificar)

// let texto = "tecnologia e inovação"
// let verificar = texto.lastIndexOf("ã")
// console.log(verificar)

// let texto = "fiap a melhor faculdade"
// let verificar = texto.substr(-1,1)
// document.write(verificar)

// let texto = "fiap a melhor faculdade"
// let verificar = texto.slice(0,5)
// document.write(verificar)

// 6)CRIE UMA ESTRUTURA QUE IMPRIMA NA TELA document.write CONCATENANDO
// LOJA DE INFORMATICA
// O MELHOR MOUSE POR R$22,00
// TECLADO QUE TRAS O MELHOR CONFORTO POR R$50,00
// CADEIRA GAMER TOP DE LINHA R$1300,00
// UTILIZE O MELHOR MOUSE PAD POR R$ 15,00

// document.write("<h1>Loja de informática<h1>");
// document.write("<p>O MELHOR MOUSE POR R$22,00</p>")
// document.write("<p>TECLADO QUE TRAS O MELHOR CONFORTO POR R$50,00</p>")
// document.write("CADEIRA GAMER TOP DE LINHA R$1300,00</p>")
// document.write("<p>UTILIZE O MELHOR MOUSE PAD POR R$ 15,00</p>")

// 1) Exiba uma caixa de texto "Seja bem vindo" na abertura do documento html, e depois do usuario
// clicar no botão apareça uma outra rotina imprimindo a frase " Essa é sua Página inicial“
// 2) faça um programa para dizer se o usuario é maior ou não que 18 anos
// 3) faça um programa que se o usuario for admin aparece usuario logado caso não aparece usuário invalido
// 4) faça um programa que mostre se os números abaixo é maior 105
// a) 20
// b) 60
// c) 106
// d) 110
// 5) faça um programa que mostre se os números abaixo é menor 105
// a) 20
// b) 60
// c) 106
// d) 110
// 6) faça um programa que se o aluno se ficou com 6 aprovado caso ele fique igual ou abaixo de 5 retido

// 1)
// alert("Seja bem-vindo")
// alert("Essa é sua Página inicial")

// 2)
// let idade = "18"
// if(idade>=18){
//     document.write("você é maior de 18 anos")
// }else{
//     document.write("você é menor de 18 anos")
// }

//3)
// let usuario = "admin"
// if(usuario == "admin"){
//     alert("usuario logado")
// }else{
//     alert("usuario invalido")
// }

//4)
// // let num = 105
// // let num1 = 20
// // let num2 = 60
// // let num3 = 106
// // let num4 = 110
// if(num1 > num){
//     document.write(num1 + " é maior que " + num)
// }else{
// }
// document.write(num1 + " é menor que " + num)
// if(num2 > num){
// }else{
//     document.write(num2 + " é menor que " + num)
//     document.write(num2 + "é maior que " + num)
// }

// let nota = 4
// if(nota <= 5){
//     document.write("reprovado")
// }else{
//     document.write("aprovado")
// }
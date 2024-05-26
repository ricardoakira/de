// - - - Manipulando Textos e Números

// .replace()
// let texto = "as provas estão chegando"
// console.log(texto.replace("chegando", "acabando"));
// substitua um trecho do texto

// .toUpperCase()
// let texto = "as provas estão chegando"
// alert(texto.toUpperCase())
// todos os caracteres ficam em maíusculo

// .toLowerCase
// let texto = "As provas estão chegando"
// let minusculo = texto.toLowerCase()
// document.write(minusculo)
// todos os caracteres ficam em minúsculo

// .toFixed()
// let num = 123.456
// document.write(num.toFixed(2))
// let convert = num.toFixed(2)
// document.write(typeof convert)
// arredonda o numero de acordo com o numero de casas decimais escolhidas que esta entre parenteses e o numero passa a ser uma string

// .toPrecision()
// let num = 10.5
// let convert = num.toPrecision(2)
// alert(convert)
// arredonda o numero que esta antes da ,

// Diferença entre toFixed() e toPrecision()
// toFixed() - arredonda os numeros que estao depois da ,
// toPrecision() arredonda os numeros que estão antes da ,
// obs: numeros que estão com 0.5 sao arredondados para cima

// * Operadores Matemáticos *
// +, -, /, //, *, % -> resto da divisao, ** -> potência

// * Caixas de Mensagem *
// alert("Olá, sou uma caixa de alerta!")

// caixa de confirmação
// confirm()
// let test = confirm("vocé é um aluno?")
// console.log("resultado da caixa de confirm", test)
// ele retorna um valor booleano, ok = true e cancelar = false

// caixa de texto
// prompt()
// let nome = prompt("Qual o seu nome?", "escreva aqui")
// console.log("seu nome é", nome)
// if(nome != "asd"){
//     alert("tchau")
// }else{
//     alert("bem vindo ", nome)
// }
// abre uma caixa de texto usada para responder uma pergunta, e o "escreva aqui" que esta depois da virgula, é um texto que fica selecionado na caixa de resposta (opcional)

// && -> "e" || -> "ou"

// &&
// let num = 5
// if(num < 6 && num > 10){
//     document.write("numero válido")
// }else{
//     document.write("numero inválido")
// }
// caso uma das afirmações seja falsa, o resultado sera false

// let num = 5
// if(num < 6 || num > 10){
//     document.write("numero válido")
// }else{
//     document.write("numero inválido")
// }
// caso uma das afirmações seja falsa, o resultado continuara sendo true se o outro for verdadeiro

// 1) Exiba uma caixa de texto "Seja bem vindo" na abertura do documento html, e depois do usuario
// clicar no botão apareça uma outra rotina imprimindo a frase " Essa é sua Página inicial "

// alert("seja bem vindo") 
// alert("essa é sua pagina inicial")

// 2) faça um programa para dizer se o usuario é maior ou não que 18 anos

// let idade = prompt("Quantos anos você tem?")
// if(idade < 18){
//     alert("Menor de 18 anos")
// }else{
//     alert("Maior de 18 anos")
// }

// 3) faça um programa que se o usuario for admin aparece usuario logado caso não aparece usuário invalido
// let login = prompt("login:", "digite seu login aqui")
// if(login != "asd"){
//     alert("usuario incorreto")
// }else{
//     alert("login bem sucedido")
// }

// 4) faça um programa que mostre se os números abaixo é maior 105
// a) 20
// b) 60
// c) 106
// d) 110

// let num1 = 20
// let num2 = 60
// let num3 = 106
// let num4 = 110
// if(num1 > 105){
//     document.write("maior")
// }else{
//     document.write("menor")
// }
// if(num2 > 105){
//     document.write(" - maior")
// }else{
//     document.write(" - menor")
// }
// if(num3 > 105){
//     document.write(" - maior")
// }else{
//     document.write(" - menor")
// }
// if(num4 > 105){
//     document.write(" - maior")
// }else{
//     document.write(" - menor")
// }

// 5) faça um programa que mostre se os números abaixo é menor 105
// a) 20
// b) 60
// c) 106
// d) 110

// let num1 = 20
// let num2 = 60
// let num3 = 106
// let num4 = 110
// if(num1 < 105){
//     document.write("menor")
// }else{
//     document.write("maior")
// }
// if(num2 < 105){
//     document.write(" - menor")
// }else{
//     document.write(" - maior")
// }
// if(num3 < 105){
//     document.write(" - menor")
// }else{
//     document.write(" - maior")
// }
// if(num4 < 105){
//     document.write(" - menor")
// }else{
//     document.write(" - maior")
// }

// 6) faça um programa que se o aluno se ficou com 6 aprovado caso ele fique igual ou abaixo de 5 retido
// let nota = prompt("digite sua nota")
// if(nota <= 5){
//     alert("retido")
// }else{
//     alert("aprovado")
// }

// 7) Faça as seguintes operações usando Operador &&:

// a) Maior que 1 e menor 5
// let num = prompt("numero maior que 1 e menor que 5")
// if(num > 1 && num < 5){
//     console.log(true)
// }else{
//     console.log(false)
// }

// b) Menor 10 e maior que 20
// let num = prompt("numero menor que 10 e maior que 20")
// if(num <10 && num > 20){
//     console.log(true)
// }else{
//     console.log(false)
// }

// c) Maior que 100 e menor que 110
// let num = prompt("numero maior que 100 e menor que 110")
// if(num > 100 && num < 110){
//     console.log(true)
// }else{
//     console.log(false)
// }

// 7) Faça as seguintes operações usando Operador || :

// a) maior que 20 ou menor que 25
// let num = prompt("numero maior que 20 ou menor que 25")
// if(num > 20 || num < 25){
//     console.log(true)
// }else{
//     console.log(false)
// }

// b) menor que 10 ou maior que 15
// let num = prompt("numero menor que 10 ou maior que 15")
// if(num < 10 || num > 15){
//     console.log(true)
// }else{
//     console.log(false)
// }

// c) maior que 5 ou menor que 10
// let num = prompt("numero maior que 5 ou menor que 10")
// if(num > 5 || num < 10){
//     console.log(true)
// }else{
//     console.log(false)
// }

// let num = parseFloat(prompt("Digite um número para arredondar após a vírgula:"));
// let convert = num.toFixed(2);
// console.log(convert);
// console.log(typeof convert)
// console.log(typeof num)

// let num = parseFloat(prompt("numero para ser arrendonado antes da virgula"))
// console.log(num.toPrecision(1))
// console.log(typeof num)

// let txt = prompt("texto")
// document.write(txt.toUpperCase())
// document.write(" - ", txt.toLowerCase())

// let texto = prompt("texto")
// console.log("original:", texto)
// console.log("texto com letra a substituida pela letra o")
// console.log(texto.replace("a", "o"))

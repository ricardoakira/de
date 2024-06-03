// - - - Estruturas de Decisão e Reperição - - - 

// * Estrutura de Decisão

// Switch 

// let teste = parseInt(prompt("escolha uma opção"))
// switch(teste){
//     case 1:
//         document.write("Primeira opção")
//         break;
//     case 2:
//         document.write("Segunda opção")
//         break;
//     case 3:
//         document.write("Terceira opção")
//         break;
//     default:
//         document.write("caso não seja a primeira a segunda e nem a terceira opção")
//         break;
// }
// uma estrutura de decisão que não trabalha com booleanos (true or false)
// dentro dos parenteses não é necessario utilizar testes de true or false como no if

// * Incremento e Decremento *
// let valor = 1
// console.log(valor)
// valor += 5 
// console.log(valor)
// valor ++
// console.log(valor)
// o valor += 1 é a mesma coisa que valor = valor + 5
// valor ++ é a mesma coisa que valor = valor + 1
// primeiro print - 1
// segundo print - 6
// terceiro print - 7

// funciona com operadores também
// let valor = 5
// console.log(valor) -> 5
// valor *= 4
// console.log(valor) -> 20
// valor %= 9
// console.log(valor) -> 2
// valor -- 
// console.log(valor) -> 1
// valor /= 1
// console.log(valor) -> 1

// * Estrutura de Repetição *
// FOR

// for(let i = 0; i < 10; i++){
//     console.log("Agora i vale" + i)
// }
// let i = 0 -> inicialização
// i < 10 -> condição
// i ++ -> incremento
// i vale 0, e se i for menor que 10, ocorre o i + 1

// for com array
// let carros = ["Gol", "Fusca", "HB20", "Corsa"]
// for (let i = 0; i < carros.length; i++){
//     console.log(carros[i])   
// }

// let i = 0: Inicializa uma variável i com o valor 0
// i < carros.length: Define a condição para continuar o loop enquanto i for menor que o tamanho do array carros
// i++: Incrementa o valor de i em 1 a cada iteração
// A linha console.log(carros[i]) exibe no console o elemento do array carros correspondente ao índice i
// Durante a execução do loop, o valor de i varia de 0 a 3, acessando cada elemento do array
// ocorre o seguinte processo: console.log(carros[0]) console.log(carros[1]) console.log(carros[2]) console.log(carros[3]) 
// "Gol" = posição 0 "Fusca"= posição 1  "HB20"= posição 2  "Corsa" = posição 3 

// for of
// let carros = ["Gol", "Fusca", "HB20", "Corsa"]
// for(let i of carros){
//     console.log(i)
// }
// a variavel i percorre cada elemento do array

// WHILE (enquanto)

// let cont = 0
// while(cont < 10){
//     console.log("passagem" + cont)
//     cont++
// }

// enquanto cont for menor que 10, ocorrera um aumento de +1 no cont e sera mostrado no console: passagem0 ate 9

// do while

// let cont = 0
// do{
//     console.log("Passagem"+ cont)
//     cont++
// }while(cont == 0)

// enquanto a variavel cont for igual a 0, sera feito o que esta dentro do "do"
// caso seja while(cont == 10), sera executado apenas uma vez, pois o do sempre sera executado pelo menos uma vez
// caso seja while(cont >= 1), entrara em loop infinito
// caso seja while(cont < 10), sera executado ate a passagem9

// * Funções *

// function nomeFuncao(arg1, arg2){
//     return arg1 + arg2
// }
// console.log(nomeFuncao(5,4));

// function avisar(){
//     alert("ola")
// }
// let caixa= prompt("digite 1")
// if(caixa == 1){
//     avisar()
// }else{
//     alert("erro")
// }



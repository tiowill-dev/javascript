/*24 - Return Function*/



function sum(number1, number2) {//function sem return e do tipo void, ou seja, ela não retorna nenhum valor
    return number1 + number2 /*a palavra reservada return é usada para retornar um valor de uma função, 
     ou seja, quando a função é chamada, ela irá retornar o valor que está após a palavra return. 
     No exemplo acima, a função sum retorna a soma dos dois números passados como argumentos.
     depois do RETURN nada mais e executado dentro da função*/
}
const firstNumber = 5
const secondNumber = 10
 console.log('o primeiro número é', firstNumber)
console.log('o segundo número é', secondNumber)

console.log('a soma é', sum(firstNumber, secondNumber))
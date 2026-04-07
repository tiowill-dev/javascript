/* Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior*/

function maiorNumero(num1, num2) {
    if (num1 > num2) {
        return `O número ${num1} é maior que o número ${num2}.`;
    } else if (num2 > num1) {
        return `O número ${num2} é maior que o número ${num1}.`;
    } else {
        return `Os números ${num1} e ${num2} são iguais.`;
    }
}

// Exemplo de uso:
const numero1 = 10;
const numero2 = 20;
console.log(maiorNumero(numero1, numero2));


/*exercicio de calculadora usando funções*/

const calculate = (number1, number2, operation) => {
    let result;  
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            throw new Error('Operação inválida');
    }
    return result;
};
console.log(calculate(10, 5, '+'))
console.log(calculate(10, 5, '-'))
console.log(calculate(10, 5, '*'))
console.log(calculate(10, 5, '/'))
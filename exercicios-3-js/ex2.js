/*Escreva um programa onde, você chame uma função enviando um número 
(aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.
*/

function tabuada(numero) {
    if (numero < 1 || numero > 10) {
        console.log('Por favor, insira um número entre 1 e 10.');
        return;
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
tabuada(7); // Chama a função com o número desejado, por exemplo, 5.
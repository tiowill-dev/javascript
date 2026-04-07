/*Escreva um programa onde, você chame uma função enviando um número, 
a função deve imprime na tela os número de 1 até o número que você enviou*/

function imprimirNumeros(numero) {
    for (let i = 1; i <= numero; i++) {
            console.log('Contando...' + i);
        }
}

imprimirNumeros(10); // Chama a função com o número desejado, por exemplo, 10. 
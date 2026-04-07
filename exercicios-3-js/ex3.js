/*Escreva um programa onde, você chame uma função, e ela diga a hora exata!*/

function mostrarHora() {    
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();  
    console.log(`A hora exata é: ${horas}:${minutos}:${segundos}`);
}
mostrarHora(); // Chama a função para mostrar a hora exata.


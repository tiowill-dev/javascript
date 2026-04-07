/*Escreva um programa onde, você chame uma função, e ela diga que ano estamos!*/

function mostrarAno() {
    const month = new Date();
    const day = month.getDate();
    const agora = new Date();
    const ano = agora.getFullYear();
    console.log(`hoje é dia ${day} do mês ${month.getMonth() + 1} de ${ano}  `);
}
mostrarAno(); // Chama a função para mostrar o ano atual.

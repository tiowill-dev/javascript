/*crie um programa quee verifica se um numero e PAR,IMPAR e se ele é PRIMO*/

const number = 27

if(number % 2 === 0){
    if(number % 5 ===0) console.log(`${number} é PAR e divisivel por 5`)
else{console.log(`${number} é PAR mas nao e divisivel por 5`)}
}
else{
for(let i = 2; i < number; i++)
    if(number % i === 0) {console.log(`${number} é IMPAR mas nao é primo`)
    break}

else { if(i === number -1) console.log(`${number} é um numero PRIMO`)} }
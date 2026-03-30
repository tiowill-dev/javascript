/*crie um programa que leia 4 numeros e defina se todos sao IMPARES/PARES/MISTURADO*/

const numberOne = 11
const numberTwo = 21
const numberThri = 31
const numberFor = 41

if(numberOne % 2 === 0 && numberTwo % 2 ===0 && numberThri % 2 === 0 && numberFor % 2 ===0 ){
    console.log("todos sao PAR")}
else if(numberOne % 2 !== 0 && numberTwo % 2 !==0 && numberThri % 2 !== 0 && numberFor % 2 !==0 ){
    console.log("todos sao IMPAR")}
else{
    console.log("todos estao misturados")}    
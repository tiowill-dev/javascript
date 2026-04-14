/*ARRAY - metodos*/

const students = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia', 'André']
students.push('Luiza') //adiciona um elemento no final do array
console.log(students)

console.log(students.length) //retorna o tamanho do array

console.log(students.sort()) //ordena os elementos do array

delete students[1] //deleta um elemento do array, mas não altera o tamanho do array
console.log(students) 

students.splice(1, 0, 'william') //deleta um elemento do array e altera o tamanho do array
console.log(students)

const newStudents = students.slice(1, 3) //retorna uma parte do array sem alterar o array original
console.log(newStudents)

students.pop() //remove o último elemento do array e retorna ele
console.log(students)

students.shift() //remove o primeiro elemento do array e retorna ele
console.log(students)

students.unshift('Luiza') //adiciona um elemento no início do array e retorna o novo tamanho do array
console.log(students)

//push - adiciona um elemento no final do array
//length - retorna o tamanho do array   
//sort - ordena os elementos do array
//delete - deleta um elemento do array, mas não altera o tamanho do array

//splice - deleta um elemento do array e altera o tamanho do array
//slice - retorna uma parte do array sem alterar o array original
//pop - remove o último elemento do array e retorna ele
//shift - remove o primeiro elemento do array e retorna ele
//unshift - adiciona um elemento no início do array e retorna o novo tamanho do array
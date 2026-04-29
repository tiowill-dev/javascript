/*MAP
-criar um novo array,apartir de um array existente (array original)
criar um novo array com a mesma quantidade de itens do  array original
- aceita 3 parametros
-item do array
-index
-array completo 
*/

/*const number = [1, 2, 3, 4, 5]
const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 21 },
    { name: "David", age: 19 },
    { name: "Eve", age: 23 },
    { name: "Frank", age: 24 }];

const newArray = number.map((number) => {

    console.log(number)

})*/

const number = [1, 2, 3, 4, 5]
const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 21 },
    { name: "David", age: 19 },
    { name: "Eve", age: 23 },
    { name: "Frank", age: 24 }];

/*const newArray = number.map((number) => {

    return number * 2

})
console.log(newArray)*/

const newstudents = students.map((student) => {
    const newStudent = {
        name: student.name + " da Silva",
        age: student.age - 5
    }    
       return newStudent
    })
console.log(newstudents)
console.log (students)
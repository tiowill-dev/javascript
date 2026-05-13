/* For each */

/*const students = [
    {name: "rodolfo", age: 23},
    {name: "maria", age: 22},
    {name: "joão", age: 24},
    {name: "ana", age: 21}
]
students.forEach((student,index)=> {
    console.log(student, index)  
})*/

/*const students = [
    {name: "rodolfo", age: 23},
    {name: "maria", age: 22},
    {name: "joão", age: 24},
    {name: "ana", age: 21}
]

let allStudentsAge = 0
students. forEach((student,index)=>{
    allStudentsAge += student.age
})

const averageAge = allStudentsAge / students.length

console.log(`a media é ${averageAge. toFixed(0)}`)*/


const students = [
    {name: "rodolfo", age: 23},
    {name: "maria", age: 22},
    {name: "joão", age: 24},
    {name: "ana", age: 21}
]

let allStudentsAge = 0
students.forEach((student,index)=>{
    console.log(`o nome do aluno é ${student.name} e a idade é ${student.age} e esta na posição ${index}`)
})

/*aula filter*/

/*const list = [
    {name: "Rodolfo",vip: true}, 
    {name: "Maria",vip: false}, 
    {name: "João",vip: true},
    {name: "Ana",vip: false},
    {name: "Carlos",vip: true},
    {name: "Beatriz",vip: false},
    {name: "Lucas",vip: true}
]

const newVip = list.filter( clint =>{

    return clint.vip
})
console.log(newVip)*/

const list = [
    { name: "Rodolfo", testGrade: 7 },
    { name: "Maria", testGrade: 8 },
    { name: "João", testGrade: 9 },
    { name: "Ana", testGrade: 6 },
    { name: "Carlos", testGrade: 10 },
    { name: "Beatriz", testGrade: 7 },
    { name: "Lucas", testGrade: 8 }
]

const students = list.filter(student => student.testGrade >= 7) //a formula pode ser feita desta maneira para economia de linhas de codigo

console.log(students)
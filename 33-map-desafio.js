/*desafio map*/

/*const list = [
    {name: "Rodolfo",vip: true}, 
    {name: "Maria",vip: false}, 
    {name: "João",vip: true},
    {name: "Ana",vip: false},
    {name: "Carlos",vip: true},
    {name: "Beatriz",vip: false},
    {name: "Lucas",vip: true}
]

const newList =list.map(clint =>{
const newList ={name: clint.name,
    vip:clint.vip,
    sector:clint.vip ? 'Black' : 'Green'
}
return newList
})
console.log(newList)*/

const list = [
    { name: "Rodolfo", testGrade: 7 },
    { name: "Maria", testGrade: 8 },
    { name: "João", testGrade: 9 },
    { name: "Ana", testGrade: 6 },
    { name: "Carlos", testGrade: 10 },
    { name: "Beatriz", testGrade: 7 },
    { name: "Lucas", testGrade: 8 }
]

const students =list.map(student=>{
    let aprovedOrNot
    if(student.testGrade >= 7){
        aprovedOrNot = 'aproved'
    }
    else{aprovedOrNot = 'disapproved'} 
    
    return {
       name: student.name,
       nota: student.testGrade,
        finalResult: aprovedOrNot
    }
  
  
})
console.log(students)
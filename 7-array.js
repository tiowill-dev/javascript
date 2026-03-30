/*Array

array = uma lista de dados, pode ser guardado todos os tipos de dados, como string, number, boolean, array, object, function, etc.

array = é um tipo de dado composto, ou seja, ele pode guardar vários valores em uma única variável.
*/

const numbers = [1, 2, 3, 4, 5]
//nos arrays começamos pelo numero 0//
console.log(numbers[0])//1
console.log(numbers[1])//2
console.log(numbers[2])//3
console.log(numbers[3])//4
console.log(numbers[4])//5

const people = [{
    name: "William",
    age: 30,
    sex: "Male",
    height: 1.73,
    hobbies:"gaming",
    "phone-number": "123-456-7890",
    address: {
        city: "Campinas",
        country: "Brazil",
        street: "st kyotto",
        number: 42}
},
{
    name: "Andre",
    age: 30,
    sex: "Male",
    height: 2.00,
    hobbies:"gaming",
    "phone-number": "123-456-7820",
    address: {
        city: "Maringa",
        country: "Brazil",
        street: "st goiaba",
        number: 890}
},
{
    name: "Bruno",
    age: 25,
    sex: "Male",
    height: 1.90,
    hobbies:"gaming",
    "phone-number": "123-645-7890",
    address: {
        city: "Campinas",
        country: "Brazil",
        street: "dik5",
        number: "s/n"}
}]

console.log(people[0])//William
console.log(people[1].name + " - " + people[1].height)//Andre - 2.00
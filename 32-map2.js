/* map parte 2 */

/*const newArray0 = number.map( function(number) {
    return number * 2
})

const newArray1 = number.map( (number) => {
    return number * 2
})

const ne = number.map( number => number * 2)*/
const number = [1, 2, 3, 4, 5]
const double = number => number * 2
const toReals = number=> `R$ ${ number.toFixed(2)}`

const newArray2 = number.map(double).map(toReals)

console.log(newArray2)


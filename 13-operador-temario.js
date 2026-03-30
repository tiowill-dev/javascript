/* OPERADOR TEMARIO

? -- SE 
: -- SE NAO 
*/

const rain = true
const umbrela = rain ? 'levar guarda-chuva' : 'deixar guarda-chuva'
console.log(umbrela)

const balance = true
const isNotBlocked = true
const accountExiste = true

const transferOk = balance&&isNotBlocked&&accountExiste ? 'transferencia realizada' : 'transferencia negada'
console.log(transferOk)
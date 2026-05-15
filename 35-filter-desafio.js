/*const list = [20,3,234,12,17,541,6,87,1000];

const numberPar = list.filter(number =>{

    if (number % 2 !==0) return false
    if (number % 5 !==0) return false
    return true
})
console.log(numberPar)*/

const companies = [
    { name: "Samsung", marketvalue: 50, CEO: "Kim Jong-un", foundedOn: 1938 },
    { name: "Microsoft", marketvalue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
    { name: "Intel", marketvalue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
    { name: "Facebook", marketvalue: 315, CEO: "Mark Zuckerberg", foundedOn: 2004 },
    { name: "Spotify", marketvalue: 31, CEO: "Daniel Ek", foundedOn: 2006 },
    { name: "Apple", marketvalue: 845, CEO: "Tim Cook", foundedOn: 1976 }
];
const list = companies.filter(company => {

    if (company.foundedOn > 1975 && company.marketvalue > 200) return true
    else return false
})


console.log(list)
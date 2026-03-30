
/* objects */

const person = {
    name: "William",
    age: 30,
    sex: "Male",
    hobbies:"gaming",
    "phone-number": "123-456-7890",
    address: {
        city: "Campinas",
        country: "Brazil",
        street: "rua kyotto",
        number: 42
    },
};
console.log(person);
console.log(person.name);
console.log(person["name"]);
console.log(person["phone-number"]);
console.log(person.address.city);
console.log(person.address.number);
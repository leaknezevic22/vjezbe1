// let nesto = '21.12';
// let datum = `Danas je datum ${nesto}`;
// let multilineString = `danas
// je 
// datum`;
// console.log(datum);
// console.log(multilineString);

const osoba =
`{
    "firstName": "John",
    "lastName": "Smith",
    "isAlive": true,
    "age": 27,
    "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021-3100"
    }
}`;

const obj = JSON.parse(osoba);
obj.fullName = obj.firstName + " " + obj.lastName;
console.log(obj.firstName + ", " + obj.lastName + ", " + obj.age);
console.log(obj);

//Figma, Trello, Git, GitHub, Cyprus


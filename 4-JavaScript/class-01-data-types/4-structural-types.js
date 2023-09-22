// Object

let nameStudent = "Wellington";
let age = 45;
let profission = "Web Developer";

console.log(age);

let student = {
    name: "Wellington",
    age: 45,
    profission: "Web Developer",
    action: () => "Estudou",
};

console.log(student);
console.log(typeof student);
console.log(student.name);
console.log(student.age);
console.log(student["profission"]);
console.log(student.action);
console.log(student.action());

// Array (vetor)

// let pokedex = ["Charmander", 6, "Bulbasour", 5, "Squirtle", 4];

// let pokedex = [
//     ["Charmander", 6],
//     ["Bulbasour", 5],
//     ["Squirtle", 4],
//     ];

let pokedex = [
    { name: "Charmander", level: 6},
    { name: "Bulbasour", level: 5},
    { name: "Squirtle", level: 4},
    ];

// console.log(pokedex);
// console.log(typeof pokedex);
// console.log(pokedex [0]);
// console.log(pokedex [2]);
// console.log(pokedex [1][0]);

console.log(pokedex [0].name);

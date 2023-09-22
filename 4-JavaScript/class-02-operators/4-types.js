// Binary
let num1 = 2;
let num2 = 3;

console.log(num1 + num2);
console.log("test " + num2);
console.log(2 + 3);

// Unary
console.log(num1++);
console.log(num1);
console.log(++num1);
console.log(typeof num1);

// Ternsry
console.log(3 > 4 ? "Verdadeiro" : "Falso");
console.log(3 == 4 ? "Verdadeiro" : "Falso");
console.log(3 != 4 ? "Verdadeiro" : "Falso");

console.log(3 < 4 ? num1 = "AAA": num1 = "BBB");
console.log(num1);

const average = 7
console.log(average >= 7 ? "Aprovado" : "Reprovado");

// Truthy Falsy "qd Booleano for obrigatório"

console.log(1 ? true : false);
console.log(" " ? true : false);
console.log(0 ? true : false);
console.log({} ? true : false);
console.log([] ? true : false);
console.log(NaN ? true : false);
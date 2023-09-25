// named
function average(grade1, grade2 /*parametros*/) {
    const result = (grade1 + grade2) / 2
    document.write(`${result} <br>`);
}

average(3, 7); // Argumento
average(8, 9);
average(7, 6);
average(3, 2);

// anonymous
const add = function (num1, num2) {
    return num1 + num2
}

console.log(add(2, 3));

// arrow (funciona das 2 formas)
// const mult = (num1, num2) => {
//     return num1 * num2   
// }
const mult = (num1, num2) => num1 * num2   
console.log(mult(2, 3));
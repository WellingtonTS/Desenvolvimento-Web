const num1 = Number(prompt("Digite o primero número: "));
const num2 = Number(prompt("Digite o segundo número: "));

const add = num1 + num2;
const sub = num1 - num2;
const mul = num1 * num2;
const div = num1 / num2;
const rem = num1 % num2;
const exp = num1 ** num2;

document.write(`A addition de ${num1} e ${num2} é: ${add} <br>`);
document.write(`A subtraction de ${num1} e ${num2} é: ${sub} <br>`);
document.write(`A multiplication de ${num1} e ${num2} é: ${mul} <br>`);
document.write(`A divison de ${num1} e ${num2} é: ${div.toFixed(2)} <br>`);
document.write(`A remainder de ${num1} e ${num2} é: ${rem} <br>`);
document.write(`A exponention de ${num1} e ${num2} é: ${exp} <br>`);

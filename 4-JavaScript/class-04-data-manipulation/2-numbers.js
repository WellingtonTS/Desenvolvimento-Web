let num1 = 2.5959595959534;
let num2 = 9839826487289462896542899837219878971

console.log(num1);
console.log(parseInt(num1));
console.log(parseInt(num2));
console.log(parseFloat(num2));
console.log(String(num2).length);
console.log(String(num1.toFixed(2)).replace(".", ","));
console.log(num1.toLocaleString("pt-BR", {style: "currency", currency: "brl"}));

const Numbers = [2, 3, 6, 2, 4, 7, 98, 3, 2, 54, 76, 3]

console.log(Math.max(2, 3, 1, 2));
console.log(Math.min(2, 3, 1, 2));
console.log(Math.max(...Numbers));
console.log(Math.min(...Numbers));


console.log(Math.floor(2.999999)); // arredondar p/ baixo
console.log(Math.ceil(2.0001)); // arredondar p/ cima

console.log(Math.round(2.5));
console.log(Math.round(2.4));
console.log(Math.round(0.99) * 10);
console.log(Math.round(Math.random() * 10));
console.log(Math.round(Math.random() * 10));

console.log(Math.ceil(Math.random() * 10)); // sortear 0-10
console.log(Math.floor(Math.random() * 10)); // 0-9
console.log(Math.floor(Math.random() * 10)); // 1-10
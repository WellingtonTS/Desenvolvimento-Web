let dataNow = new Date();
let data1 = new Date("2023-12-1 12:03:24");
let data2 = new Date("2023-12-3 18:03:24");

console.log((data2 - data1) / 1000 / 60 / 60 / 24); //dias
console.log(0.25 * 24); //horas do dia

console.log(dataNow);
console.log(data1);

console.log(dataNow.getDay());
console.log(dataNow.getDate());
console.log(dataNow.getMonth());
console.log(dataNow.getFullYear());


console.log(dataNow.setDate(dataNow.getDate()));
console.log(dataNow.setMonth(dataNow.getMonth()));
console.log(dataNow.setFullYear(dataNow.getFullYear() + 1));

console.log(dataNow.getHours());
console.log(dataNow.getMinutes());
console.log(dataNow.getSeconds());

// console.log(new Date().setHours.(dataNow.getHours()+12));

let day = String(dataNow.getDate()).padStart(2, "0");
let month = String(dataNow.getMonth()).padStart(2, "0");
let year = dataNow.getFullYear();

console.log(`${day}/${month}/${year}`);

console.log(dataNow.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
}));
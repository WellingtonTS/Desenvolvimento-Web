console.log("Antes");

const timeOut = setTimeout(() => {
   console.log("setTimeout"); 
}, 2000);

console.log("Depois");

let count = 0;
const interval = setInterval(() => {
   console.log(`setInterval ${count}`);
   count++;

   if (count === 10) {
   clearInterval(interval);
   }
}, 1000);

console.log(timeOut);
console.log(interval);

const myArray = Array("A", 1, () => "a");

console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]());
console.log(myArray.join("_"));

const myName = "Torquato";
console.log(myName.split("").reverse().join(""));

const arrayTechs = ["HTML", "CSS", "GIT"];

arrayTechs.push("JavaScript");
arrayTechs.push("só acredito vendo");

arrayTechs.pop()
const removeItemEnd = arrayTechs.pop() //LIFO
console.log(removeItemEnd + " foi removido com sucesso"); 

const removeItemStar = arrayTechs.shift() //LIFO
console.log(removeItemStar + " foi removido com sucesso");

arrayTechs.unshift("React");
arrayTechs.unshift("SQL");

console.log(arrayTechs);

console.log(arrayTechs.includes("CSS"));
console.log("A" == "a");

console.log(arrayTechs.indexOf("GIT"));
console.log(arrayTechs.indexOf("JavaScript")); // -1 not exist

console.log(arrayTechs.keys());

console.log(arrayTechs.slice(1));
console.log(arrayTechs.slice(1, 3));
console.log(arrayTechs.slice(-3, -1));

console.log(arrayTechs);

console.log(arrayTechs.splice(3));
console.log(arrayTechs);

console.log(myArray.concat(arrayTechs));
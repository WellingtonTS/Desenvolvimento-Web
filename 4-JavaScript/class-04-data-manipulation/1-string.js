let myName = "Wellington"

console.log(myName.__proto__);
console.log(myName.length);
console.log(myName[1]);
console.log(myName.toLocaleLowerCase());
console.log(myName.toLocaleUpperCase());

console.log(myName[1] = "E"); // string immutable
console.log(myName);

let phrase = "Im a web developer   "

console.log(phrase.split(" ")[2] = "WEB");
console.log(phrase.split("").reverse().join(""));
console.log(phrase.replace("web" , "WEB"));
console.log(phrase.indexOf("a"));
console.log(phrase.trim()); // tira os espaços
console.log(phrase.substring(5));

console.log(phrase.includes("web"));
console.log(phrase.includes);
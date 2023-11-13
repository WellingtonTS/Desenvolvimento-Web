// Factory (Creational Design Pattern)

function person(name, age) {
    return {
        name,
        age: age,
        canDrive: age >= 18,
        status: () => {
            if (age >= 18) {
                return "Pode dirigir"
            } else {
                return "Não pode dirigir"
            }
        }
    };
}

console.log(person("Wellington", 45));
console.log(typeof person("Wellington", 45));
console.log(person("Odilon", 17));
console.log(person("Odilon", 17).status());
console.log(person("Wellington", 45).status());
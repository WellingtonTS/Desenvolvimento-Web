const arrayNumbers = [7, 4, 5, 7, 8, 9, "7", 40];

// const value = arrayNumbers.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// });

const arraySorted = arrayNumbers.sort((a, b) => a - b);

console.log(arraySorted.join("-"));
console.log(arrayNumbers.join("-"));

const arrayNames = ["Pedrinho", "eduardo", "Luiza"];

arrayNames.sort((a, b) => a - b);

console.log(arrayNames);


const arrayNames2 = ["Pedrinho", "eduardo", "Luiza"];
arrayNames2.sort((a, b) => {
    a = a.toUpperCase();
    b = b.toUpperCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(arrayNames2);


const arrayNames3 = ["Pedrinho", "eduardo", "Luiza", "Éric"];

arrayNames3.sort((a, b) => {
    a = a.toUpperCase();
    b = b.toUpperCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
arrayNames3.sort((a, b) => a.localeCompare(b));
arrayNumbers.sort((a, b) => String(a).localeCompare(b));

console.log(arrayNames3);
console.log(arrayNumbers);

const arrayAnimes = [
    { name: "Cavaleiros do Zodiaco", year: 1986 },
    { name: "Dragon Ball", year: 1984 },
    { name: "Digimon", year: 1997 },
    { name: "Naruto", year: 1997 },
    { name: "Jaspion", year: 1985 },
];

const sortedArrayAnimes = arrayAnimes.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
});

console.table(sortedArrayAnimes);
console.table(arrayAnimes.sort((a, b) => a.year - b.year));
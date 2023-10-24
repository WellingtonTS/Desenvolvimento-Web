const arrayNumbers = Array.from({ length: 25}, (value, index) => index + 1).sort(() => Math.random() -0.5).filter((value, index) => index < 15).sort((a, b) => a - b);

console.log(arrayNumbers.join("-"));
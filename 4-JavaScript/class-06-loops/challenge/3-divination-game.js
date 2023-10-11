const randomNumber = Math.ceil(Math.random() * 10);
let countTry = 1;

while (true) {
    const guessNumberUser = prompt("Adivinhe um número de 1 a 10");
    console.log(guessNumberUser);
    
    if (guessNumberUser === null) {
        alert("Programa encerado");
        break;
    }

    if (guessNumberUser < 1 || guessNumberUser > 10) {
        alert("Atenção! Númer de 1 a 10");
    }

    if (guessNumberUser === "" || isNaN(guessNumberUser)) {
        alert("Insira um número de 1 a 10");
        continue;
    }
  
    const gameOver = Number(guessNumberUser) === randomNumber;
        
    if (gameOver) {
        alert(`Parabéns! Você acertou o núemro ${randomNumber} em ${countTry} tentativa(s)`);
        break;
    }
    countTry += 1;
}


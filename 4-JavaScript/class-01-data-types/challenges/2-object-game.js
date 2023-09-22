const gameName = prompt("Nome do jogo");
const gameGenre = prompt("Qual o gênero");
const gameReleaseYear = prompt("Ano de lançamento");

const game = {
    name: gameName,
    genre: gameGenre,
    releaseYear: gameReleaseYear,
};

console.log(game.name);
console.log(game.genre);
console.log(game.releaseYear);
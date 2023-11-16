const url = "https://api.github.com/users/WellingtonTS";

console.log("Inicio");

const gitHubUser = fetch(url)
    .then((request) => request.json())
    .then(({name, bio}) =>
    console.log({
        name,
        bio,
    })
    ).catch((error) => console.erro(error))
    .finally(() => console.log("Fim da requisição!"));

console.log(gitHubUser);
console.log("FIM");
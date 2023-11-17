// paradigma
// métodos (funções)
// atributos (variáveis)
// entidades do mundo real
// This (Scope)

class Brush {
    constructor(color, height) {
    this.colorName = color;
    this.height = height;
    }
    action() {
        console.log("Escreve");
    }
}

const blueBrush = new Brush("Azul", 10);
const redBrush = new Brush("Vermelho", 12);

redBrush.action();

console.log(blueBrush.colorName);
console.log(redBrush.colorName);

console.log(blueBrush.height);
console.log(redBrush.height);

console.log(blueBrush.colorName, blueBrush.height);
console.log(redBrush.colorName, redBrush.height);

class Pokemon {
    constructor(name, level) {
    this.name = name;
    this.level = level;
    this.health = 100;
    }

    attack() {
    console.log(`${this.name} atacou!`);
    }

    damage(effective, damage = 20){
    if (effective) {
        this.health -= damage * 1.3;
    } else {
        this.health -= damage;
    }
    }
}

const charmander = new Pokemon("charmander", 5);
const squirtle = new Pokemon("squirtle", 4);
const bulbasaur = new Pokemon("bulbasaur", 3);

console.log(charmander.name);
console.log(charmander.level);
console.log(squirtle.name);

squirtle.attack();

console.log(bulbasaur.health);
bulbasaur.damage();
console.log(bulbasaur.name, bulbasaur.health);

const effective = true
bulbasaur.damage(effective);
console.log(bulbasaur.name, bulbasaur.health);
// Avaliação JavaScript


// Questão 1 (Data Types):
// Declare as seguntes variáveis e atribua os valores por tipo: Sting, Number, Boolean, Function, Array, Object
let Sting = "1";
let Number = 1;
let Boolean = true;
let myFunction = () => {};
let Array = [];
let Object = {};


// Questão 2 (Operators):
// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 12 e 3 e raiz quadrada de 144;

let num1 = 12;
let num2 = 3;
let num3 = 144;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

console.log(num3 ** (1/2)); //square root
var raizQuadrada = Math.sqrt(num3);

console.log(raizQuadrada);


// Questão 3 (Functions):
// Crie e execute uma função de nome 'test" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno.


function test(value) {
    return "Javascript" + value;
};
console.log(test("test"));


// Questão 4 (Data Manipulation):
// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro.

const list = ["Açucar", "Café", "Garrafa"];

list.push("Biscoito");
list.shift();
list.unshift("Adoçante");

console.log(list);



// Questão 5 (for):
// Liste todos os valores do array criado na questão anterior ultilizando o for.

var myArray = [list]; // O array criado anteriormente

for (var i = 0; i < myArray.length; i++) {
  console.table(myArray[i]);
}
  


// Questão 6 (while):
// Escreva os números de 0 a 500 sem os que pertencem à familía do 200 e do 300:


let count = 0;
while (count <= 500) {
  if (count < 200 || count >= 400) {
    console.log(count);
  }
  count++;
}



// Questão 7 (if):
// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h


function limiteMulta(velocidade) {
    const limiteVelocidade = 60;
    
    if (velocidade > limiteVelocidade) {
      console.log("Motorista multado por velocidade alta!");
    } else if (velocidade < limiteVelocidade / 2) {
      console.log("Motorista multado por velocidade baixa!");
    } else {
        console.log("Motorista não foi multado");
      } 
  }

limiteMulta(70);
limiteMulta(25);
limiteMulta(31);



// Questão 8 (array methods):
// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa

const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];
const aumento = 0.10;

const novosSalarios = [];
let novoTotalFolha = 0;

for (let i = 0; i < salary.length; i++) {
  const salarioAtual = salary[i];
  const novoSalario = salarioAtual + (salarioAtual * aumento);
  novosSalarios.push(novoSalario);
  novoTotalFolha += novoSalario;
}
console.log("Salário atuais", salary);
console.log("Novos salários:", novosSalarios);
console.log("Novo total em folha:", novoTotalFolha);

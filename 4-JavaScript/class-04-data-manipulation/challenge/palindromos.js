function checkPalindrome(text) {
    let normalText = text;
    let reverseText = text.split("").reverse().join("");
    return normalText == reverseText
}
// let text = prompt("Digite a palavra")
let text = "ovo"
const isPalindrome = checkPalindrome(text);

console.log(isPalindrome ? "Verdadeiro" : "Falso");


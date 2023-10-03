function runApplication() {
    return "Runnung...";
}

try {
    console.log(runApplication());
} catch (error) {
    console.error(error);
} finally {
    console.log("Sempre será executado");
}

document.write("Application is running...");  

function divedeNumbers(num1, num2) {
    if (num2 == 0) throw new Error("Não é possível divir por ZERO!");
    return num1 / num2;
}

console.log(divedeNumbers(6, 2));
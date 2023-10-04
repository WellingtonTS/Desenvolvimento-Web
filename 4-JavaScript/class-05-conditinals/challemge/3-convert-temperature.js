function degreeConvert(degree) {
    const degreeAux = degree.split(" ").join("");
    const arrayDegree = Array.from(degreeAux);
    const scaleDegree = arrayDegree.pop().toUpperCase();
    const newDegree = Number(arrayDegree.join(""));

    if (isNaN(newDegree)) throw new Error("Valr inválido!");
    
    function convertCelciusToFahrenheit() {
        return (newDegree * 9) / 5 + 32;
    }

    function convertFahrenheitToCelsius() {
        return ((newDegree - 32) * 5) / 9;
    }

    switch (scaleDegree) {
        case "C":
            return convertCelciusToFahrenheit() + "F";
        case "F":
            return convertFahrenheitToCelsius() + "C";
        default:
            throw new Error("Escala não identificada!");
    }

    // sempre monitorar os códigos, tudo rodando blz! Aí apaga os log's
    console.log(degree);
    console.log(degreeAux);
    console.log(arrayDegree);
    console.log(scaleDegree);
    console.log(newDegree);
    return "test";
}

try {
    const temperature = "50F";
    const temperatureConverted = degreeConvert(temperature);
    console.log(`${temperature} = ${temperatureConverted}`);
} catch (error) {
    console.error(error);
}
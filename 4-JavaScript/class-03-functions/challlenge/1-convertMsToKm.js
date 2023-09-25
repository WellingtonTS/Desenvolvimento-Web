function convertMsToKmh(speed) {
    return speed * 3.6
}

const userSpeed = prompt("Digite a velocidade")
const convertSpeed = convertMsToKmh(userSpeed)
document.write(convertSpeed + "km/h");
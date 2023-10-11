const array = ["F-1", "F-2", "F-3", "F-4"];7

// array.forEach((value, index) => {
// //     console.log({value, index});

// })

const arrayMap = array.map((value, index, array) => {
    return {value, index, array}});

    console.log(array);
    console.log(arrayMap);

    const dollar = [10, 20, 30, 40, 50];
    const dollarConverted = dollar.map(value => value * 5.05);

    console.log(dollar);
    console.log(dollarConverted);
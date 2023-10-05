let count = 1; //flag
while (count <= 10) {
    if (count > 2 && count < 8) {
        count++;
        continue;
        // break;
    }
    console.log(count);
    count++; //contatiner
}

count = 0; //flag
while (count <= 500) {
    if (count % 2 === 0) {
        console.log(count);
    }
    count++; //contatiner
}

//noia
count = 0;
let noia = 1; //flag
while (noia <= 500) {
    console.log(noia);
    noia = count * 2;
    count++;
}
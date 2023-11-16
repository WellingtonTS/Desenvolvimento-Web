// Task
setTimeout(() => {
    console.log(2);
}, 2000); 

// Call Satck
console.log(1);

// Microtask
Promise.resolve().then(() => {
    console.log(4);
});

// Microtask
queueMicrotask(() => {
    console.log(3);
});

for (let index = 0; index <= 1000; index++) {
    console.log(index);
};
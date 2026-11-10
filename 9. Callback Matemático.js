function calculate(a, b, callback) {
    return callback(a, b);
}

function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(calculate(10, 5, sum));
console.log(calculate(10, 5, multiply));
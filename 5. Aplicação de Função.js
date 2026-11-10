function applyFunction(fn, value) {
    return fn(value);
}

function double(n) {
    return n * 2;
}

function square(n) {
    return n ** 2;
}

console.log(applyFunction(double, 5));
console.log(applyFunction(square, 5));
function validateNumber(n) {
    if (typeof n === "number") {
        return true;
    }

    throw new Error("O valor não é um número.");
}

console.log(validateNumber(10));
console.log(validateNumber(25));
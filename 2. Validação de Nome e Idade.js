function validateUser(name, age) {
    if (typeof name === "string" && name.trim() !== "" && typeof age === "number" && age >= 0) {
        return true;
    }

    return false;
}

console.log(validateUser("Luan", 17));
console.log(validateUser("", 17));
console.log(validateUser("João", -5));
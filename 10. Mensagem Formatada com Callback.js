function formatMessage(msg, formatter) {
    return formatter(msg);
}

function upperCase(text) {
    return text.toUpperCase();
}

function lowerCase(text) {
    return text.toLowerCase();
}

console.log(formatMessage("Olá, Luan!", upperCase));
console.log(formatMessage("Olá, Luan!", lowerCase));
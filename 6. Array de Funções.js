const operations = [
    function(a, b) {
        return a + b;
    },

    function(a, b) {
        return a - b;
    },

    function(a, b) {
        return a * b;
    }
];

console.log("Soma:", operations[0](4, 2));
console.log("Subtração:", operations[1](4, 2));
console.log("Multiplicação:", operations[2](4, 2));
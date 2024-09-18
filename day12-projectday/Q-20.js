let str = "hello";

let hasUppercase = Array.from(str).some(char => char === char.toUpperCase() && char !== char.toLowerCase());

console.log(hasUppercase);

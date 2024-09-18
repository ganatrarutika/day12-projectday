let str = "banana";

const vowels = new Set('aeiou');

let allVowels = Array.from(str).every(char => vowels.has(char));

console.log(allVowels);

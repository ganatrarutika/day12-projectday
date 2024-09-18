let str = "Hello";

let characters = Array.from(str);

characters.forEach((character, index) => {
  process.stdout.write(character + (index < characters.length - 1 ? ', ' : ''));
});


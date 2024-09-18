let numbers = [1, 2, 3];

numbers.forEach((number, index) => {
  process.stdout.write(number + (index < numbers.length - 1 ? ', ' : ''));
});

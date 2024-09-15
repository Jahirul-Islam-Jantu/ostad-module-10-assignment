//Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.
function calculateDifference(a, b) {
  return a - b;
}
const result = calculateDifference(10, 6);
console.log(result);

// Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
function isOdd(number) {
  return number % 2 !== 0;
}
console.log(isOdd(100021354116));

// Write a function named findMin that takes an array of numbers and returns the smallest number in the array.
const numbers = [23156431361,315461,1875163,41641, 154653, 65465131, 41541,146216198416];
function findMin(numbers) {
  return Math.min(...numbers);
}
console.log(findMin(numbers))

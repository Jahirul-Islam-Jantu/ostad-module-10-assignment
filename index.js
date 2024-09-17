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

    // Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
    const arrayOfNumbers = [158465,384613,14466,389746,16544163,698466,8979846,741651635,365698469,897756419,951648]
    function filterEvenNumbers (arrayOfNumbers){
      return arrayOfNumbers.filter(evenNumbers => evenNumbers % 2 ===0)
    }
    console.log(filterEvenNumbers(arrayOfNumbers))

// Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

    const numbersArray = [3531, 4145, 478, 545, 45, 6587, 657416, 54]
    function sortArrayDescending(arr){
      arr.sort((a , b)=>{
      return b - a;
    })
    return arr;
    }
     const sortedNumbers = sortArrayDescending(numbersArray);


    console.log('sorted in descending order: ', sortedNumbers)

// Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

    const letters = 'Hello'

    function lowercaseFirstLetter(str){
      return str.charAt(0).toLowerCase() + str.slice(1)
    }
    const lettersLowerCase = lowercaseFirstLetter(letters)
    console.log(lettersLowerCase)

// Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
    const str = "I am from Bangladesh"
    function countVowels(str){
    const vowels = 'aeiouAEIOU'
    const vowelCount = str.split('').filter(char => vowels.includes(char)).length
    return vowelCount
    }
    const findVowels = countVowels(str)
    console.log(findVowels)

// Write a function named findAverage that takes an array of numbers and returns the average of all elements.

    const numbersToFindAverage = [10, 20, 30, 50, 90, 125]
    function findAverage(arr) {
      if (arr.length === 0) return 0;

      let sum = arr.map(num => num).reduce((acc, curr) => acc + curr, 0);

      return sum / arr.length;
    }
    const findAverageNumbers = findAverage(numbersToFindAverage)
    console.log(findAverageNumbers)
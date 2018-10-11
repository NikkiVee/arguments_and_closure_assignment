
// 1. Create two functions: `double` and `square`.
// `double` should take a number and return the number times two.
// `square` should take a number and return the number squared.

const double = num => num * 2 ;

const square = num => num * num;

const doubleSquare = num => square(double(num));

console.log(doubleSquare(5))


// 2. Create a function `classyGreeting` that takes as input the strings `firstName`  and `lastName`,
// and returns a string with a greeting using the two.
//
//   * Create a second function `yell`  that takes string as input and returns the string in all capitalized letters.
//   * Create a third function  `yellGreeting`  that will take the `firstName`  and `lastName`  as inputs and yell a greeting using the two.

// const classyGreeting = (...arg) => `Hello ${arg[0]} ${arg[1]}!`;
//
// const yell = str => str.toUpperCase();
//
// const yellGreeting = (...args) => yell(classyGreeting(args[0], args[1]));
//
// console.log(yellGreeting("classy", "bitch"));

// 3. The [concat](https://www.w3schools.com/jsreF/jsref_concat_array.asp) array method is used to merge two (or more) arrays.
// Write a `removeDupes` function that takes an array as an argument and returns a copy without any duplicate elements.
// Then, write a function `concatAndRemoveDupes`  that combines two arrays and removes any duplicates.
//
// const removeDupes = (arr) => {
//   let output = [];
//   let obj = {};
//   for(let i = 0; i < arr.length; i++){
//     if(!obj[arr[i]]){
//     obj[arr[i]] = 1
//     output.push(arr[i])
//   }
// }
// return output;
// }
// console.log(removeDupes(["A", "B", "C", "D", "A", "C"]))
//
// const joinDupes = (a, b) =>{
// let concat = [...a, ...b]
//
// return removeDupes(concat)}
//
// console.log(joinDupes(["1", "2", "3"],["2", "3", "4"]))


// 4. Given a list of grades, we can get the median grade by sorting the list and taking the middle element, or the average of the two middle elements.
// Create the functions `sort` and `middleElement`, and then use them to create the functions `median`.
//
// let grades = [91, 85, 100, 92, 88];
//
// console.log(median(grades)); // Should log 91
// const sorted = arr => arr.sort((a,b) => a-b);
//   const midElem = arr => {
//     let mid = Math.floor(arr.length / 2);
//     return [arr.length % 2] ? (arr[mid]) : (arr[mid] + arr [mid-1]) /2;
//     midElem ([4, 8, 12, 16])
//   }
//     let grades = [91, 85, 100, 92, 88];
//     const median = grades => midElem(sorted(grades));
// console.log(median(grades));


// 5. Write a function called `repeat` that takes in a string and numberOfTimes. The function should log to the screen the string however
// many times as numberOfTimes. If the user does not enter a numberOfTimes it should default to 2.
//
// const repeat = (str, numberOfTimes = 2) => {
//   for (let i = 1; i <= numberOfTimes; i++){
//     console.log(str)
//   }
// repeat("a", 3);

// 6. Using the spread operator, write a function that can take any number of arguments and return the sum of all of them.

// const getSum = (...arg) => {
//   let sum = 0;
//   for(let i = 0; i < arg.length; i++){
//     sum += arg[i]
//   }
//   return sum
// }
// console.log(getSum(1, 2, 3))

// 7. Write a function called `adder` takes in one number and returns a function that will add that number with another number.
// Using `adder` create an `add5` and an `add9`

// const adder =(...arg) => arg[0] + arg[1];
//   console.log(adder(1, 2));
// const add5 = a => adder (a, 5);
//   console.log(add5(2))
// const add9 = a => adder (a, 9);
//   console.log(add9(9))



// const calculateAgeInDogYears = (age) => {
//     const ageInDogYears = age / 7
//     return ageInDogYears
// }


// const dogAge = calculateAgeInDogYears(30)
// console.log(dogAge);













// const add =(num1,num2, num3) => {
//     const sum = num1 + num2 + num3
//     return sum
// };

// let sum = add(17, 4, 11 );
// console.log(sum);









// const go = (direction, speed) => {
//     console.log (`the car is moving ${direction} at ${speed} mph`)
//     if (speed > 75) {
//         console.log ("SLOW DOWN!")
//     }
// };

// go("backwards", 100);








// Write a function that takes a string of a dog breed as an argument (like 'border collie')
// Have the function return the value of "My favorite dog breed is schnauzer" if an argument of "schnauzer" is provided.
// Store the return value of the function into a variable. (e.g. const myFavorite = someFunction())
// Log the string of "When it comes to pets," plus the returned value of the function.
// If, and only if, an argument value of "meow" is provided to the function, it should return the string "I like cats".
// Questions to Ask
// Does the function require input to do its job?
// Does the function need to return a value?
// Am I referencing the return value with a variable?
// What should I do with the return value?
// What happens if I don't provide an argument at all?
// What happens when I remove the parameter from the definition of the function?


// const bestInShow = (breed) => {
//     const myFavoriteBreed = `My favorite is ${breed}.` 
//         if (breed === "meow"){
//             const cats = `I like cats`
//             return cats
//         }else{
//             return myFavoriteBreed
//             }
// };

// const sentence = bestInShow("shwawa");

// console.log(`When it somes to pets, ${sentence}`);






// Practice: Evens or Odds
// Design a function named evenOrOdd that takes a single number as an argument.
// It should return the string "Even" if the number is evenly divisible by two.
// It should return the string "Odd" if the number is not evenly divisible by two.
// Log the result of the function.
// Hint: Use the modulo - or remainder - operator in JavaScript to accomplish this.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

// Exploration Tasks
// Create an array of numbers outside the function. Some even, some odd. After the function is defined, iterate the array of numbers with a for..of loop, and invoke the evenOrOdd function with each number as the argument.
// What happens when you pass the argument value of 0?

const numbers = [-2, 3, 0, 27, -9]

const determineEvenOrOdd = (numbersArray) => {
    let evenOrOdd = " "
    for (const num of numbersArray) {
        if (num % 2 === 0){
            evenOrOdd += `${num} is even, `
         } else {
            evenOrOdd += `${num} is odd, `
            }
    }
    return evenOrOdd  
};

const isItEvenOrOdd = determineEvenOrOdd(numbers);
console.log(isItEvenOrOdd);


//try with scott



// const evenOddNums = (numberArg) => {
//     if (numberArg % 2 === 0){
//         return `${numberArg} is even` 
//     }
//     else {
//         return `${numberArg} is odd`
//     }
// }

// const numberArray = [-2, 0, 3, 9, 27, 30]

// for (const number of numberArray) {
//     const numberToLog = evenOddNums (number)
//     console.log(numberToLog)
// }


// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

// for (let x = 0; x < cookies.length; x++) {
    
//     const currentCookie = cookies[x]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }


// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     console.log(conjoinedWord)
// }

// conjunction("Master", "Card")



// const modSquad = {
//     members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//     series: {
//         start: 1968,
//         end: 1973,
//         }
//     }


// modSquad.members.forEach(member => {
//     const HTMLRepresentation = `<h1>The Mod Squad</h1>`
//     console.log(`${HTMLRepresentation} += <div>${member}<div>`)
//     });










// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

// for (const location of locations) {

//     if (location[0] >= 2) {
//         const invalidLocation = true
//     } else {
//         console.log("This location is invalid")
//     }
// }

/*
Title: First Non-Repeating Number

Description:
Write a JavaScript program that takes an input of numbers and returns the first number that appears only once.
The original order of the input must be preserved.

Input:
An input of integers.
Example: [4, 5, 1, 2, 1, 4, 5]

Output:
A single number that does not repeat.
Example output for the input above: 2

Requirements:
Do not sort the input.
Preserve the original order.
Use loops and basic data structures (object, Map, or similar).
Return null if no non-repeating number exists.

Input: [4, 5, 1, 2, 1, 4, 5]
First non-repeating number: 2
Output: 2
*/

// let input = [4, 5, 1, 2, 1, 4, 5];
let input = [4, 4, 2];
let setInput = new Set(input);

let NRD = [];
let valueCount = null;
let length = input.length;
let amount = {};

for (let index = 0; index < length; index++) {
    // const element = input[index];

    amount[index] = null;
    
    console.log(amount)
}
input.forEach((value, index) => {
    amount[index] = value;

})
console.log(amount)
// const obj = { a: 1, b: 2, c: 3 };

// console.log(Object.values(obj).includes(2)); // true
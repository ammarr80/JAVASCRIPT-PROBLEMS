/*
Title: Filter Numbers Above Average

Description:
Write a JavaScript program that takes an array of numbers and returns a new array containing only the numbers that are greater than the average of the original array.
Input:
An array of numbers.
Example: [2, 6, 3, 8, 4]

Output:
An array of numbers greater than the average.
Example output for the input above: [6, 8]

Requirements:
Do not modify the original array.
Use a loop or iteration method to calculate the sum and average.
Use a loop or iteration method to collect numbers above the average.

Input: [2, 6, 3, 8, 4]
Average = (2+6+3+8+4) / 5 = 4.6
Output: [6, 8]
*/

// CODE WRITTEN BY ME, WORKS.
a = [2,6,3,8,4];
const AVERAGE = 0;

let added = 0;
let length = a.length;
a.map((ele) => {
    added+=ele;
});
let average = added / length;

a.map((ele) => {
    if (ele > average) {
        console.log(ele)
    };
});

/* 
score around 7/10.

Pros (following the problem statement)
✅ Original array is not modified.
✅ Correctly calculates the sum and average.
✅ Filters numbers greater than the average.

Cons / Does not fully meet requirements
⚠️ Doesn’t return a new array – the requirement says the result should be an array, not just printed values.
⚠️ Uses map instead of proper iteration – map is meant for transforming arrays, not side-effects.
⚠️ Unused variable – const AVERAGE = 0 isn’t used.
*/


// CLEANER CODE (BY CHATGPT)
const numbers = [2, 6, 3, 8, 4];

let sum = 0;
for (const n of numbers) sum += n;

const avg = sum / numbers.length;

const aboveAvg = [];
for (const n of numbers) {
  if (n > avg) aboveAvg.push(n);
};

console.log(aboveAvg); // [6, 8]
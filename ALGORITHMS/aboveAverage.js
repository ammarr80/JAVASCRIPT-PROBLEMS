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
/* ======================================
     CODE WRITTEN BY ME, WORKS.
 ======================================
 */

// (ATTEMPY # 1)
a = [2,6,3,8,4];

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

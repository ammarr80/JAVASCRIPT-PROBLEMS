/*
Title: Longest Consecutive Sequence

Description:
Write a JavaScript program that takes an unsorted array of integers and returns the length of the longest sequence of consecutive numbers.
The sequence does not need to be sorted in the input array.

Input:
An unsorted array of integers.
Example: [100, 4, 200, 1, 3, 2]

Output:
A single number representing the length of the longest consecutive sequence.
Example output for the input above: 4

Requirements:
Do not sort the original array (for the O(n) challenge).
Use a Set or similar method to efficiently check for existence of numbers.
Loop through the array to find the start of each sequence and count consecutive numbers.

Input: [100, 4, 200, 1, 3, 2]
Longest consecutive sequence: [1, 2, 3, 4]
Output: 4
*/


let array = [1,2,3,100,101,102,103];

let nearbyValues = [];
let sequence = [];

const set = new Set(array);

let newArray = null;
let newSequence = null;
array.map((digit) => {
    let number = digit;
    nearbyValues.push(digit);

    let next = set.has(number + 1);
    let prev = set.has(number - 1);
    let doublePrev = set.has(number - 2);

    if (next && prev && doublePrev) {
        nearbyValues.push(number - 1);
        nearbyValues.push(number + 1);
        nearbyValues.push(number);
    };
    
    
});
const newArray = [...new Set(nearbyValues)];
console.log(newArray.length);
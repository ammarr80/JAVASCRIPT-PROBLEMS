/*
Title: Reverse a String

Description:
Write a JavaScript program that takes a string and returns a new string with the characters in reverse order.

Input:
A string.
Example: "hello"

Output:
A new string with characters reversed.
Example output for the input above: "olleh"

Requirements:
Do not modify the original string.
Use a loop or iteration method to reverse the string.
Optionally, try a one-line solution using built-in methods after completing the loop version.

Input: "hello"
Output: "olleh"
*/

/*
==============================================
  CODE WRITTEN BY ME (WORKS)
==============================================
*/

let word = "hello";
let reversed = "";

for (let i = word.length-1; i >=0; i--) {
    reversed+=word[i];
};
console.log(reversed);

// ONE-LINE SOLUTION (ATTEMPT # 1)
let new_word = "hlo"; const arr = Array.from(new_word); let newreverse = []; arr.reverse(); const stringed = arr.join(""); console.log(stringed);
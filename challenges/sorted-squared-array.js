/*
Sorted Squared Array

Given an array of integers that are sorted in increasing order,
write a function that squares all the integers in the array and returns them in a new array,
also sorted in increasing order.

Example: 

    Input:  [0, 1, 2, 3]
    Output: [0, 1, 4, 9]
*/

// Solution

const sortedSquaredArray = (array) => array.map(num => num * num)

const input = [0, 1, 2, 3]

const solution = sortedSquaredArray(input)
console.log(`INPUT: ${input}`, `SOLUTION: ${solution}`)

module.exports = sortedSquaredArray
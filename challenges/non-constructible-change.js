/*
Non-Constructible Change

Given an array of positive integers representing the values of coins in your possession,
write a function that returns the minimum amount of change (the minimum sum of money) that
you cannot create. The given coins can have any positive integer value and aren’t necessarily
unique (i.e., you can have multiple coins of the same value).

For example, if you’re given coins = `[1, 2, 5]`, the minimum amount of change that you can’t
create is `4`. If you’re given no coins, the minimum amount of change that you can’t create is 1.

Example:

    input: coins = [5, 7, 1, 1, 2, 3, 22]
    output: 20
*/

// Solution

const getAllCombinations = (array) => {
    const duplicatedArray = Array.from(array)
    let combinations = [[], [duplicatedArray.shift()]]

    duplicatedArray.forEach(element => {
        const newCombination = combinations.map(arr => {
            const newArr = Array.from(arr)
            newArr.push(element)
            return newArr
        })
        combinations = [...combinations, ...newCombination]
    });

    combinations.shift()

    const allCombinations = combinations.map(arr => arr.reduce((a, b) => a + b))

    return new Set(allCombinations)
}

const nonConstructibleChange = (coins) => {
    const possibleChanges = getAllCombinations(coins)

    let changeAmount = 1
    while (possibleChanges.has(changeAmount)) {
        changeAmount++
    }

    return changeAmount
}

const coins = [5, 7, 1, 1, 2, 3, 22]

const solution = nonConstructibleChange(coins)

console.log(`INPUT: ${coins}`, `SOLUTION: ${solution}`)

module.exports = nonConstructibleChange
const nonConstructibleChange = require('../challenges/non-constructible-change');

describe('Given an array of positive integers representing the values of coins, returns the minimum amount of change', () => {
    test('Array [5, 7, 1, 1, 2, 3, 22], expected result 20', () => {
        expect(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])).toEqual(20);
    });

    test('Array [1, 2, 3, 4], expected result 11', () => {
        expect(nonConstructibleChange([1, 2, 3, 4])).toEqual(11);
    });

    test('Array with all zeros', () => {
        expect(nonConstructibleChange([0, 0, 0, 0])).toEqual(1);
    });

    test('Empty array', () => {
        expect(nonConstructibleChange([])).toEqual(1);
    });

    test('Array with a single positive number', () => {
        expect(nonConstructibleChange([7])).toEqual(1);
    });
});
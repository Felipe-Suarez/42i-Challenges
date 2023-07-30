const sortedSquaredArray = require('../challenges/sorted-squared-array')

describe('Squares all the integers in the array', () => {
    test('Square integers of [0, 1, 2, 3], expected result [0, 1, 4, 9]', () => {
        expect(sortedSquaredArray([0, 1, 2, 3])).toEqual([0, 1, 4, 9]);
    });

    test('Square integers of [1, 2, 3, 4], expected result [1, 4, 9, 16]', () => {
        expect(sortedSquaredArray([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
    });

    test('Square integers of an array with all zeros', () => {
        expect(sortedSquaredArray([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
    });

    test('Square integers of an empty array', () => {
        expect(sortedSquaredArray([])).toEqual([]);
    });

    test('Square integers of an array with a single positive number', () => {
        expect(sortedSquaredArray([7])).toEqual([49]);
    });
});
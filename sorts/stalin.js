/**
 * @file Source code for Stalin Sort
 * @author Ricky Clark III
 * @version 1.0.0
 */

/**
 * Finds the minimum value in the array
 * 
 * @name getMin
 * @async
 * @param {Array<Number>} array the array to find the minimum value in 
 * @returns {Number} the minimum value in the array
 */
const getMin = async (array) => {
    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
}

/**
 * Sorts the array using Stalin Sort. 
 * The smallest value is found and swapped with the first value in the array.
 * Then all elements not in greater than the min are destroyed.
 * Credit to: https://github.com/gustavo-depaula/stalin-sort/blob/master/javascript/stalin-sort.js
 * 
 * @name stalinSort
 * @async
 * @param {Array<Number>} array 
 * @returns {Array<Number>} the sorted array
 */
const stalinSort = async (array) => {
    let min = await getMin(array);
    array[0] = min;

    return array.reduce((prev, next) =>
        !prev.length ||
        next >= prev[prev.length - 1] ?
            [...prev, next] :
            prev
    , []);
}

export default stalinSort;
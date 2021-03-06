/**
 * @file Source code for Stalin Sort
 * @author Ricky Clark III
 * @version 1.0.3
 * 
 * Time Complexities
 * Best Case: O(n)
 * Worst Case: O(n^2)
 */
import { getMin } from './lib/helpers.js';

/**
 * @example let stalinArray = await stalinSort(array);
 * 
 * @function
 * @name stalinSort
 * @description  Sorts the array using Stalin Sort. 
 * The smallest value is found and swapped with the first value in the array.
 * Then all elements not in greater than the min are destroyed.
 * Credit to: https://github.com/gustavo-depaula/stalin-sort/blob/master/javascript/stalin-sort.js
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
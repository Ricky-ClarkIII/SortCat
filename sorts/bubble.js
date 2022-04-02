/**
 * @file Source code for Bubble Sort
 * @author Ricky Clark III
 * @version 1.0.2
 * 
 * Time Complexities
 * Best Case: O(n)
 * Worst Case: O(n^2)
 */
import { swap } from "./lib/helpers.js";


/**
 * @example await bubbleSort(array);
 * 
 * @function
 * @name bubbleSort
 * @description Passes through all elements in the array checking if
 * its neighbor is in the correct position and swaps if they are not.
 * @async
 * @param {Array<Number>} array the array to sort 
 */
const bubbleSort = async (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                await swap(array, j, j + 1);
            }
        }
    }
}

export default bubbleSort;
/**
 * @file Source code for Bubble Sort
 * @author Ricky Clark III
 * @version 1.0.1
 */
import { swap } from "./lib/helpers";


/**
 * 
 * @function
 * @name bubbleSort
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
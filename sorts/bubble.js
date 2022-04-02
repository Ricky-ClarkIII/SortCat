/**
 * @file Source code for Bubble Sort
 * @author Ricky Clark III
 * @version 1.0.0
 */

/**
 * Swaps the left index with the
 * right index in the array
 * 
 * @function
 * @name swap
 * @async
 * @param {Array<Number>} array the array with elements to swap
 * @param {Number} leftIndex the left index in the array the to swap 
 * @param {Number} rightIndex the right index in the array of the to swap
 */
const swap = async (array, leftIndex, rightIndex) => {
    let swapItem = array[leftIndex];

    array[leftIndex] = array[rightIndex];
    array[rightIndex] = swapItem;
}

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
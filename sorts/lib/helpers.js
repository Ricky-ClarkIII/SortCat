/**
 * @file Helper functions for sorting algorithms
 * @author Ricky Clark III
 * @version 1.0.1
 */

/**
 * @example let min = await getMin(array); 
 * 
 * @function
 * @name getMin
 * @description Gets the minimum value in an array
 * @async
 * @param {Array<Number>} array the array to get the minimum value from 
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
 * @example let max = await getMax(array);
 * 
 * @function
 * @name getMax
 * @description Gets the maximum value in an array
 * @async
 * @param {Array<Number>} array the array to get the maximum value from 
 * @returns {Number} the maximum value in the array
 */
const getMax = async (array) => {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

/**
 * @example await swap(array, 0, 1);
 * 
 * @function
 * @name swap
 * @description Swaps two elements in an array
 * @async
 * @param {Array<Number>} array the array to swap elements in
 * @param {Number} i the index that array[j] will become
 * @param {Number} j the index that array[i] will become
 */
const swap = async (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

module.exports = {
    getMin,
    getMax,
    swap
}
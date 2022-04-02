/**
 * @file Source code for Count Sort
 * @author Ricky Clark III
 * @version 1.0.0
 */

/**
 * Finds the maximum value in the array.
 * 
 * @function
 * @name getMax
 * @async
 * @param {Array<Number>} array the array to find the max in 
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
 * Finds the minimum value in the array
 * 
 * @function
 * @name getMin
 * @async
 * @param {Array<Number>} array the array to find the min in 
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
 * Counts the number of times each value appears in the array.
 * Then returns the sorted array given the number of counted
 * occurences. The sorted array is copied back to the original
 * array.
 * 
 * @function
 * @name countSort
 * @async
 * @param {Array<Number>} array the array to sort 
 */
const countSort = async (array) => {
    let min = await getMin(array);
    let max = await getMax(array);

    let range = max - min + 1;

    let countArray = Array.from({length: range}, () => 0);
    let sortedArray = Array.from({length: array.length}, () => 0);

    for (let i = 0; i < array.length; i++) {
        countArray[array[i] - min]++;
    }

    for (let i = 1; i < countArray.length; i++) {
        countArray[i] += countArray[i - 1];
    }

    for (let i = array.length - 1; i >= 0; i--) {
        sortedArray[countArray[array[i] - min] - 1] = array[i];
        countArray[array[i] - min]--;
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = sortedArray[i];
    }
}

export default countSort;

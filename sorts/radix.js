/**
 * @file Source code for Radix Sort
 * @author Ricky Clark III
 * @version 1.0.2
 */
import { getMax } from "./lib/helpers.js";

/**
 * Sorts an array by counting the number
 * of occurences. A.K.A the count sort.
 * 
 * @function
 * @name countSort
 * @async
 * @param {Array<Number>} array the array to count sort
 * @param {Number} exp the digit represented as an exponential
 */
const countSort = async (array, exp) => {
    let outputArr = [];
    let countArr = [];

    for (let i = 0; i < 10; i++) {
        countArr[i] = 0;
    }

    for (let i = 0; i < array.length; i++) {
        countArr[Math.floor(array[i] / exp) % 10]++;
    }

    for (let i = 1; i < 10; i++) {
        countArr[i] += countArr[i - 1];
    }

    for (let i = array.length - 1; i >= 0; i--) {
        outputArr[countArr[Math.floor(array[i] / exp) % 10] - 1] = array[i];
        countArr[Math.floor(array[i] / exp) % 10]--;
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = outputArr[i];
    }
}

/**
 * Sorts an array with digits
 * in base 10 using Radix Sort.
 * 
 * @function
 * @name radixSort
 * @async
 * @param {Array<Number>} array the array to sort
 */
const radixSort = async (array) => {
    let max = await getMax(array);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        await countSort(array, exp);
    }
}

export default radixSort;
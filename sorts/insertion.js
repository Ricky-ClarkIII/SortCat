/**
 * @file Source code for Insertion Sort
 * @author Ricky Clark III
 * @version 1.0.2
 */

/**
 * Sorts the array using Insertion Sort.
 * The array is sorted by iterating
 * through n - 1 elements and inserting
 * the current element into the correct
 * index of the array. All bigger elements
 * are shifted to the right of the insert and 
 * all elements less are on the left of the 
 * insert.
 * 
 * @function
 * @name insertionSort
 * @async
 * @param {Array<Number>} array the unsorted array
 */
const insertionSort = async (array) => {
    for (let i = 1; i < array.length; i++) {
        let insertValue = array[i];
        let pointer = i - 1;

        while (pointer >= 0 && array[pointer] > insertValue) {
            array[pointer + 1] = array[pointer];
            pointer--;
        }

        array[pointer + 1] = insertValue;
    }
}

export default insertionSort;
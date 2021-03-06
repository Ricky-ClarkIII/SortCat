/**
 * @file Source code for Quick Sort
 * @author Ricky Clark III
 * @version 1.0.3
 * 
 * Time Complexities
 * Best Case: O(n log n)
 * Worst Case: O(n^2)
 */
import { swap } from "./lib/helpers.js";

/**
 * @example let partitionIndex = await partitionArray(array, leftPointer, rightPointer);
 * 
 * @function
 * @name partitionArray
 * @description Creates a partition of the array that is
 * has all the elements less than the pivot 
 * on the right hand side of the pivot.
 * @async
 * @param {Array<Number>} array the array to partition 
 * @param {Number} leftIndex the left most index in the array
 * @param {Number} rightIndex 
 * @returns {Number} the left most index in the array
 */
const partitionArray = async (array, leftIndex, rightIndex) => {
    let pivot = array[Math.floor((leftIndex + rightIndex) / 2)];
    let leftPointer = leftIndex;
    let rightPointer = rightIndex;

    while (leftPointer <= rightPointer) {
        while (array[leftPointer] < pivot) {
            leftPointer++;
        }

        while (array[rightPointer] > pivot) {
            rightPointer--;
        }

        if (leftPointer <= rightPointer) {
            await swap(array, leftPointer, rightPointer);
            leftPointer++;
            rightPointer--;
        }
    }

    return leftPointer;
}

/**
 * @example await quickSort(array, leftPointer, rightPointer);
 * 
 * @function
 * @name quickSort
 * @description Sorts the array using the quick sort method.
 * The middle element of the array is chosen as the pivot.
 * A partition of the array is then created 
 * where all the elements smaller than the pivot are on the right
 * and the larger elements are on the left. Then a recursive call
 * is made to partition the smaller partitions until the array is completely sorted.
 * @async
 * @param {Array<Number>} array the array to sort 
 * @param {Number} leftPointer the left most index in the array 
 * @param {Number} rightPointer  the right most index in the array
 */
const quickSort = async (array, leftPointer, rightPointer) => {
    let leftPartitionIndex = null;

    if (array.length > 1) {
        leftPartitionIndex = await partitionArray(array, leftPointer, rightPointer);

        if (leftPointer < leftPartitionIndex - 1) {
            await quickSort(array, leftPointer, leftPartitionIndex - 1);
        }

        if (leftPartitionIndex < rightPointer) {
            await quickSort(array, leftPartitionIndex, rightPointer);
        }
    }
}

export default quickSort;
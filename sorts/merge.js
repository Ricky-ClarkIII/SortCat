/**
 * @file Source code for mergesort
 * @author Ricky Clark III
 * @version 1.0.0
 */

/**
 * Creates an empty array to push sorted elements into.
 * The sub-arrays are already sorted, so only check the first elements 
 * and push the correct one into the sorted array. The shift method
 * removes the first element from the array so loop until one of the sub-arrays
 * no longer has elements. Concat the remaining sub-array onto the sorted array
 * and return the array.
 *
 * @function
 * @name merge
 * @async 
 * @param {Number} arrayOne the first sorted sub-array to merge
 * @param {Number} arrayTwo the second sorted sub-array to merge
 * @returns {Array<Number>} the merged array
 */
const merge = async (arrayOne, arrayTwo) => {
    let sortedArray = [];

    while (arrayOne.length && arrayTwo.length) {
        if (arrayOne[0] < arrayTwo[0]) {
            sortedArray.push(arrayOne.shift());
        } else {
            sortedArray.push(arrayTwo.shift());
        }
    }

    return [...sortedArray, ...arrayOne, ...arrayTwo];
}

/**
 * Merges two arrays using mergesort. Mergesort
 * splits the arrays in half recursively until the array consists
 * of only a single element. The returning sub-arrays will be merged and 
 * sorted until the entire array is completely sorted.
 * 
 * @function
 * @name mergeSort
 * @async
 * @param {Array<Number>} array the array to sort 
 * @returns {Array<Number>} the sorted array
 */
const mergeSort = async (array) => {
    if (array.length < 2) {
        return array;
    }

    let middleIndex = array.length / 2;
    let subArray = array.splice(0, middleIndex);

    return await merge(await mergeSort(subArray), await mergeSort(array));
}

export default mergeSort;
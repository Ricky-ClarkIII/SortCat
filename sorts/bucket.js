/**
 * @file Source code for Bucket Sort
 * @author Ricky Clark III
 * @version 1.0.0
 */

/**
 * Sorts an array using the bucket sort
 * method of sorting. Array length number of
 * buckets are created. Each bucket is then filled
 * with elements of the array. Those buckets are then individually
 * sorted and finally concatenated into a single sorted array.
 * 
 * @function
 * @name bucketSort
 * @async
 * @param {Array<Number>} array the array to sort
 */
const bucketSort = async (array) => {
    if (array.length <= 0) {
        return;
    }

    let bucketArrays = new Array(array.length);

    for (let i = 0; i < bucketArrays.length; i++) {
        bucketArrays[i] = new Array();
    }

    for (let i = 0; i < array.length; i++) {
        let index = Math.floor(array[i]);
        bucketArrays[index].push(array[i]);
    }

    for (let i = 0; i < bucketArrays.length; i++) {
        bucketArrays[i].sort();
    }

    let pointer = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < bucketArrays[i].length; j++) {
            array[pointer++] = bucketArrays[i][j];
        }
    }
}

export default bucketSort;

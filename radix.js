/**
 * @file Source code for Radix Sort
 * @author Ricky Clark III
 * @version 1.0.0
 */

/**
 * Finds the maximum value in the array
 * 
 * @function
 * @name getMax
 * @async
 * @param {Array<Number>} array the array to find the maximum value in 
 * @return {Number} the maximum value in the array
 */
const getMax = async (array) => {
    try {
        //Set max to first item in the array
        let max = array[0];

        //Loop through array to find max
        for (let i = 1; i <= array.length; i++) {

            //Set new max
            if (array[i] > max) {
                max = array[i];
            }
        }

        //Return the max value in the array
        return max;
    } catch(err) {
        console.error(err);
    }
}

/**
 * Sorts an array by counting the number
 * of occurences. A.K.A the count sort.
 * @function
 * @name countSort
 * @async
 * @param {Array<Number>} array the array to count sort
 * @param {Number} exp the digit represented as an exponential
 */
const countSort = async (array, exp) => {
    try {
        //Initialize the output array and count array
        let outputArr = [];
        let countArr = [];

        //Fill array with zeros
        for (let i = 0; i < 10; i++) {
            countArr[i] = 0;
        }

        //Store the number of occurences in count
        for (let i = 0; i < array.length; i++) {
            countArr[Math.floor(array[i] / exp) % 10]++;
        }

        for (let i = 1; i < 10; i++) {
            countArr[i] += countArr[i - 1];
        }

        //Create the output array
        for (let i = array.length - 1; i >= 0; i--) {
            outputArr[countArr[Math.floor(array[i] / exp) % 10] - 1] = array[i];
            countArr[Math.floor(array[i] / exp) % 10]--;
        }

        //Copy output array to base array
        for (let i = 0; i < array.length; i++) {
            array[i] = outputArr[i];
        }
    } catch(err) {
        console.error(err);
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
    try {
        //Get max
        let max = await getMax(array);

        //Sort the array
        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            await countSort(array, exp);
        }

        //Print the array
        await printArray(array);
    } catch(err) {
        console.error(err);
    }
}

/**
 * Prints an array to the console
 * 
 * @function
 * @name printArray
 * @async
 * @param {Array<Number>} array the array to print 
 */
const printArray = async (array) => {
    try {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    } catch(err) {
        console.error(err);
    }
}
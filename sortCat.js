/**
 * @file Source code for SortCat
 * @author Ricky Clark III
 * @version 1.0.0
 */
import radixSort from "./sorts/radix.js";
import mergeSort from "./sorts/merge.js";

/**
 * SortCat class that has all your sorting
 * needs! If you need a radix sort, he's there 
 * for you! If you wanna mergesort, he's more than 
 * happy to abide; however, if you want to pet SortCat
 * he will simply will not comply.
 * @class
 */
class SortCat {
    /**
     * Instantiates a new SortCat Class
     * for sorting arrays with different methods.
     * 
     * @param {Array<Number>} array the array to sort 
     */
    constructor(array) {
        this.array = array;
        this.sortedArray = [];
        this.hasBeenPet = false;
    }

    /**
     * Prints an array to the console
     * 
     * @function
     * @name printArray
     * @async
     * @param {Array<Number>} array the array to print 
     */
    prrrintArray = async () => {
        for (let i = 0; i < this.array.length; i++) {
            console.info(this.array[i]);
        }
    }

    prrrintSortedArray = async () => {
        for (let i = 0; i < this.sortedArray.length; i++) {
            console.info(this.sortedArray[i]);
        }
    }

    /**
     * Sorts the array using the
     * radix sort method of sorting!
     * SortCat approved.
     */
    radix = async () => {
        console.log("SortCat is sorting your array using Radix Sort!");
        this.sortedArray = await radixSort(this.array);
        console.log("SortCat has finished sorting your array!");
    }

    /**
     * Sorts the array using the mergesort
     * method of sorting! SortCat patented.
     */
    merge = async () => {
        console.log("SortCat is sorting your array using Merge Sort!");
        this.sortedArray = await mergeSort(this.array);
        console.log("SortCat has finished sorting your array!");
    }

    /**
     * SortCat does not like being pet...
     */
    pet = async () => {
        this.hasBeenPet = true;
        console.error("SortCat does not like being pet...");
    }
}

export default SortCat;
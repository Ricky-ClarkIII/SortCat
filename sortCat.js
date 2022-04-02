/**
 * @file Source code for SortCat
 * @author Ricky Clark III
 * @version 1.0.0
 */
import radixSort from "./sorts/radix.js";
import mergeSort from "./sorts/merge.js";
import quickSort from "./sorts/quick.js";
import stalinSort from "./sorts/stalin.js";
import insertionSort from "./sorts/insertion.js";
import bubbleSort from "./sorts/bubble.js";

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

    /**
     * Sorts the array using the
     * radix sort method of sorting!
     * SortCat approved.
     */
    radix = async () => {
        console.log("SortCat is sorting your array using Radix Sort!");
        await radixSort(this.array);
        await this.prrrintArray();
        console.log("SortCat has finished sorting your array!");
    }

    /**
     * Sorts the array using the mergesort
     * method of sorting! SortCat approved.
     */
    merge = async () => {
        console.log("SortCat is sorting your array using Merge Sort!");
        this.array = await mergeSort(this.array);
        await this.prrrintArray();
        console.log("SortCat has finished sorting your array!");
    }

    /**
     * Sorts the array using the quicksort
     * method of sorting! SortCat approved.
     */
    quick = async () => {
        console.log("SortCat is sorting your array using Quick Sort!");
        await quickSort(this.array, 0, this.array.length - 1);
        await this.prrrintArray();
        console.log("SortCat has finished sorting your array!");
    }

    /**
     * Sorts the array using the stalin sort
     * method of sorting! SortCat approved.
     */
    stalin = async () => {
        console.log("SortCat is sorting your array using Stalin Sort!");
        this.array = await stalinSort(this.array);
        await this.prrrintArray();
        console.log("SortCat has finished sorting your array!");
    }

    /**
     * Sorts the array using the insertion sort
     * method of sorting! SortCat approved.
     */
    insertion = async () => {
        console.log("SortCat is sorting your array using Insertion Sort!");
        await insertionSort(this.array);
        await this.prrrintArray();
        console.log("SortCat has finished sorting your array!");
    }

    /**
     * 
     */
    bubble = async () => {
        console.log("SortCat is sorting your array using Bubble Sort!");
        await bubbleSort(this.array);
        await this.prrrintArray();
        console.log("SortCat has finished sorting your array!");
    }

    /**
     * Pet SortCat to see if he likes you
     */
    pet = async () => {
        this.hasBeenPet = true;
        console.error("SortCat does not like being pet...");
    }
}

export default SortCat;
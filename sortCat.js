/**
 * @file Source code for SortCat
 * @author Ricky Clark III
 * @version 1.0.2
 */
import radixSort from "./sorts/radix.js";
import mergeSort from "./sorts/merge.js";
import quickSort from "./sorts/quick.js";
import stalinSort from "./sorts/stalin.js";
import insertionSort from "./sorts/insertion.js";
import bubbleSort from "./sorts/bubble.js";
import countSort from "./sorts/count.js";
import bucketSort from "./sorts/bucket.js";

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
     * @example const sortCat = new SortCat(array);
     * 
     * @constructor
     * @param {Array<Number>} array the array to sort 
     */
    constructor(array) {
        this.array = array;
        this.hasBeenPet = false;
    }

    /**
     * @example await SortCat.prrrintArray(); 
     * 
     * @method
     * @name printArray
     * @description Prints an array to the console
     * @async
     */
    prrrintArray = async () => {
        for (let i = 0; i < this.array.length; i++) {
            console.log(this.array[i]);
        }
    }

    /**
     * @example await SortCat.radix();
     * 
     * @method
     * @name radix
     * @description Sorts the array using the
     * radix sort method of sorting!
     * SortCat approved.
     * @async
     * @param {Object} options Options for the radix sort
     * @param {Boolean} options.time if true, will print the time it took to sort
     */
    radix = async ({...options}) => {
        if (options.time) {
            await this.setTimer(true);
        }

        await radixSort(this.array);
    
        if (options.time) {
            await this.setTimer(false);
            await this.clearTimer();
        }
    }

    /**
     * @example await SortCat.merge();
     * 
     * @method
     * @name merge
     * @description Sorts the array using the mergesort
     * method of sorting! SortCat approved.
     * @async
     * @param {Object} options options for the merge sort
     * @param {Boolean} options.time if true, will print the time it took to sort
     */
    merge = async ({...options}) => {
        if (options.time) {
            await this.setTimer(true);
        }

        this.array = await mergeSort(this.array);

        if (options.time) {
            await this.setTimer(false);
            await this.clearTimer();
        }
    }

    /**
     * @example await SortCat.quick();
     * 
     * @method
     * @name quick
     * @description Sorts the array using the quicksort
     * method of sorting! SortCat approved.
     * @async
     * @param {Object} options the options for the quick sort
     * @param {Boolean} options.time if true, will print the time it took to sort
     */
    quick = async ({...options}) => {
        if (options.time) {
            await this.setTimer(true);
        }

        await quickSort(this.array, 0, this.array.length - 1);
    
        if (options.time) {
            await this.setTimer(false);
            await this.clearTimer();
        }
    }

    /**
     * @example await SortCat.stalin();
     * 
     * @method
     * @name stalin
     * @description Sorts the array using the stalin sort
     * method of sorting! SortCat approved.
     * @async
     * @param {Object} options the options for the stalin sort
     * @param {Boolean} options.time if true, will print the time it took to sort
     */
    stalin = async ({...options}) => {
        if (options.time) {
            await this.setTimer(true);
        }

        this.array = await stalinSort(this.array);
    
        if (options.time) {
            await this.setTimer(false);
            await this.clearTimer();
        }
    }

    /**
     * @example await SortCat.insertion();
     * 
     * @method
     * @name insertion
     * @description Sorts the array using the insertion sort
     * method of sorting! SortCat approved.
     * @async
     * @param {Object} options the options for insertion sort
     * @param {Boolean} options.time if true, will print the time it took to sort
     */
    insertion = async ({...options}) => {
        if (options.time) {
            await this.setTimer(true);
        }

        await insertionSort(this.array);
        
        if (options.time) {
            await this.setTimer(false);
            await this.clearTimer();
        }
    }

    /**
     * @example await SortCat.bubble(true);
     * @method
     * @name bubble
     * @description Sorts the array using the bubble sort
     * method of sorting! SortCat approved.
     * @async
     * @param {Object} options the options for the bubble sort
     * @param {Boolean} options.time if true, the time it took to sort will be printed
     */
    bubble = async ({...options}) => {
        if (options.time) {
            await this.setTimer(true);
        }

        await bubbleSort(this.array);
        
        if (options.time) {
            await this.setTimer(false);
            await this.clearTimer();
        }
    }

    /**
     * @example await SortCat.count();
     * 
     * @method
     * @name count
     * @description Sorts the array using the count sort
     * method of sorting! SortCat approved.
     * @async
     * @param {Object} options the options for count sort
     * @param {Boolean} options.time if true, the time it took to sort will be printed
     */
    count = async ({...options}) => {
        if (options.time) {
            await this.setTimer(true);
        }

        await countSort(this.array);
    
        if (options.time) {
            await this.setTimer(false);
            await this.clearTimer();
        }
    }

    /**
     * @example await SortCat.bucket();
     * 
     * @method
     * @name bucket
     * @description Sorts the array using the bucket sort
     * method of sorting! SortCat approved.
     * @async
     * @param {Object} options the options for the bucket sort
     * @param {Boolean} options.time if true, the time it took to sort will be printed
     */
    bucket = async ({...options}) => {
        if (options.time) {
            await this.setTimer(true);
        }

        await bucketSort(this.array);
    
        if (options.time) {
            await this.setTimer(false);
            await this.clearTimer();
        }
    }

    /**
     * Pet SortCat to see if he likes you
     */
    pet = async () => {
        this.hasBeenPet = true;
        console.error("SortCat does not like being pet...");
    }

    /**
     * @example await setTimer(true);
     * 
     * @function
     * @name setTimer
     * @description A timer for checking the runtime of the 
     * sorting algorithms.
     * @async
     * @param {Boolean} start whether or not this is the start of the timer 
     */
    setTimer = async (start) => {
        if (start) {
            this.startTime = new Date().getTime();
        } else {
            this.endTime = new Date().getTime() - this.startTime;
            console.log(`Time to sort: ${this.endTime}ms`);
        }
    }

    /**
     * @example await clearTimer();
     * 
     * @function
     * @name clearTimer
     * @description Clears the timer
     * @aysnc
     */
    clearTimer = async () => {
        this.startTime = null;
        this.endTime = null;
    }
}

export default SortCat;
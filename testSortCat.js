/**
 * @file Test file for SortCat
 * @author Ricky Clark III
 * @version 1.0.3
 */
import SortCat from "./sortCat.js";

/**
 * @const {number} NUM_ELEMENTS - Number of elements to sort
 */
const NUM_ELEMENTS = 1000;

/**
 * Tests SortCat sorting
 * algorithms.
 */
const testSortCat = async () => {
    console.log(`Number of Elements to sort: ${NUM_ELEMENTS}`);

    let unsortedArray = Array.from({length: NUM_ELEMENTS}, () => Math.floor(Math.random() * NUM_ELEMENTS));
    let sortCat = new SortCat(unsortedArray);

    await sortCat.radix({time: true});
}

testSortCat();
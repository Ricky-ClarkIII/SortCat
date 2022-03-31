import SortCat from "./sortCat.js";

const NUM_ELEMENTS = 100000;

const testSortCat = async () => {
    console.log(`Number of Elements to sort: ${NUM_ELEMENTS}`);
    let unsortedArray = Array.from({length: NUM_ELEMENTS}, () => Math.floor(Math.random() * NUM_ELEMENTS));
    let sortCat = new SortCat(unsortedArray);
    await sortCat.stalin();
    await sortCat.pet();
}

testSortCat();
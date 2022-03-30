import SortCat from "./sortCat.js";

const testSortCat = async () => {
    let unsortedArray = Array.from({length: 1000000}, () => Math.floor(Math.random() * 1000000));
    let sortCat = new SortCat(unsortedArray);
    await sortCat.merge();
    await sortCat.prrrintSortedArray();
    await sortCat.pet();
}

testSortCat();
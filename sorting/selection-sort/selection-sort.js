let array = [2, 6, 1, 3, 13, 4];
let sortedArray = [];
const removeItemFromArray = (array, item) => {
    array.splice(item, 1);
}

const getMinNum = array => Math.min(...array);

const selectionSort = array => {     
    let count = array.length; 

    for(let i = 0; i < count; i++) {
        const minNum = getMinNum(array);
        const indexMinNum = array.indexOf(minNum);
        
        sortedArray.push(minNum);
        removeItemFromArray(array, indexMinNum)
    }
    return sortedArray;
};

const result = selectionSort(array);

console.log(result)
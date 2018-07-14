let array = [2, 6, 1, 3, 13, 4];
let clone = [...array];

const getMinNum = array => Math.min(...array);
const removeItemFromArray = (array, item) => {
    array.splice(item, 1);
}

const selectionSort = array => {     
    let count = array.length; 

    for(let i = 0; i < count; i++) {
        const minNum = getMinNum(clone);
        const indexMinNum = clone.indexOf(minNum);
        
        removeItemFromArray(clone, indexMinNum)
        array[i] = minNum;
    }
};

const result = selectionSort(array);
console.log(array)
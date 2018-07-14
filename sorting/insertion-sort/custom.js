let array = [2, 6, 3, 1, 13, 4];
let count = array.length;

const nextIndex = prev => prev + 1;
const prevElement = prevElementIndex => array[prevElementIndex];
const nextElement = prevElementIndex => array[nextIndex(prevElementIndex)];

for(let index = 2; index < count; index++) {
    let sortElement = array[index];
    let prevElementIndex = index - 1;

    // elements to right side
    while(index > 0 && prevElement(prevElementIndex) > sortElement) {
        array[nextIndex(prevElementIndex)] = prevElement(prevElementIndex)
        prevElementIndex--;
    }
    // sort element to sorted place
    array[nextIndex(prevElementIndex)] = sortElement;
}

console.log(array)
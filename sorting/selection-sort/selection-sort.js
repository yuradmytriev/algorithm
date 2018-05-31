let array = [
    2,
    6,
    1,
    3,
    13,
    4
];

const selectionSort = array => {
    let count = array.length;

    array.map((item, index) => {
        let indexOfminNumber = index;

        // find index of minimal number
        for (let j = index + 1; j < count; j++) {
            if (array[j] < array[indexOfminNumber]) {
                indexOfminNumber = j;
            }
        }

        // get temp minimal number
        let temp = array[indexOfminNumber];
        // replace old number
        array[indexOfminNumber] = array[index];
        // replace first index with min number
        array[index] = temp;
    })
};

const result = selectionSort(array);
console.log(array)
let array = [
    2,
    6,
    1,
    3,
    13,
    4
];

const shellSort = array => {
    let count = array.length;
    let halfCount = count => {
        return Math.floor(count/2);
    };

    for (let index = 0; index < count; index++) {
        const getHalftCount = halfCount(index + (index + 1));
        console.log(getHalftCount)
        if (array[index] > array[getHalftCount]) {
            //console.log(array[index], array[getHalftCount])
            [array[index], array[getHalftCount]] = [array[getHalftCount], array[index]];
        }
    }

    return array;
};

console.log(shellSort(array))
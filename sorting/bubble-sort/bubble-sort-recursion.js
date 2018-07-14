
let repeat = true;
let array = [2, 6, 1, 3, 8, 4, 5];

const replaceValue = (array, item, index) => {
    [array[index], array[index + 1]] = [array[index + 1], array[index]];
};

const stopRecursion = () => {
    repeat = false;
};

const continueRecursion = () => {
    repeat = true;
};

const cycle = recursion => {
    stopRecursion();
    array.map((item, index) => {
        if (item > array[index + 1]) {
            replaceValue(array, item, index);  
    
            continueRecursion();
            recursion(repeat)
        }
    })
};

const recursion = repeat => {
    repeat && cycle(recursion);
};

recursion(repeat);
console.log(array);

const nums = [2, 3, 1, 5, 7, 6];
const getHalfOfArray = array => Math.floor(array.length / 2);
const getLeftSide = (array) => {
    const half = getHalfOfArray(array);
    const left = array.slice(0, half);

    return left;
};
const getRightSide = (array) => {
    const half = getHalfOfArray(array);
    const right = array.slice(half, array.length);

    return right;
}
const isLastElementEqual = (array, number) => {
    if (array.length === 1 && array[0] !== number) {
        return true;
    }
}
const isElementEqualHeapValue = (max, min, number) => {
    if (number === max || number === min) {
        return true;
    }
}

const binarySearch = (nums, number) => {
    const array = nums.sort();
    const left = getLeftSide(array);
    const right = getRightSide(array);
    const max = Math.max.apply(null, left);
    const min = Math.min.apply(null, right);

    if (isLastElementEqual(array, number)) {
        return -1;
    }

    if (isElementEqualHeapValue(max, min, number)) {
        return number
    }

    if (number < max) {
        return binarySearch(left, number)
    } else {
        return binarySearch(right, number)
    }
}

console.log(binarySearch(nums, 2));

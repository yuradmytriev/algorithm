const unSortedArray = [1, 5, 6, 7, 2, 3, 4];

const quicksort = array => {
    const left = (x, xs) => xs.filter(val => val <= x);
    const right = (x, xs) => xs.filter(val => val > x);

    const sort = (x, xs) =>
        [].concat(
            quicksort(left(x, xs)),
            [x],
            quicksort(right(x, xs))
        );

    return !array.length ? [] : sort(array[0], array.slice(1));
};
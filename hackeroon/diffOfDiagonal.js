const diagonal =
    [
        [5, 6, 11],
        [4, 3, 1],
        [7, 6, 9]
    ];

const getFirstLine = diagonal => diagonal.map((item, index) => item[index]);
const getSecondLine = diagonal => diagonal.map((item, index) => item[(item.length - 1) - index]);
const sumOfNumbers = array => array.reduce((c, n) => c + n);

const oneSum = sumOfNumbers(getFirstLine(diagonal));
const secondSum = sumOfNumbers(getSecondLine(diagonal));

const diff = (first, second) => first - second;
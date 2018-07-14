const string = "olleh";

const reverse = string => {
    //////////////////////////////////////////////////////////////////
    let reverseArray = [];
    const arrayFromString = string => Array.from(string);
    const arrayToString = array => array.join('');
    const getLastIndex = (array, index) => (array.length - 1) - index;
    const array = arrayFromString(string);
    //////////////////////////////////////////////////////////////////

    array.map((item, index) => {
        const lastIndex = getLastIndex(array, index);
        // add last item to the begining of reversed array
        reverseArray.push(array[lastIndex]);
    });

    const reversedString = arrayToString(reverseArray);
    return reversedString;
};

const result = reverse(string);
console.log(result);
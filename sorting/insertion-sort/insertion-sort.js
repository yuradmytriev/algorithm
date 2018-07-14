let array = [2, 6, 1, 3, 13, 4];

const insertionSort = array => {
    let count = array.length;

    for (let index = 0; index < count; index++) { 
        // взял элемент
        let getItem = array[ index ];
        // счетчие для нового цикла
        let whileCount = index - 1;
        // пока не дойдем до нуля исполнем цикл

        if(whileCount >= 0) {
            while (array[whileCount] > getItem) { 
                // cдвиг массива
                array[ whileCount + 1 ] = array[ whileCount ]; 
                console.log(array[ whileCount + 1 ])
                whileCount--; 
            }
        }
        array[ whileCount + 1 ] = getItem;
     }                    
    return array;   
};

const result = insertionSort(array);
console.log(result)
let array = [2, 6, 1, 3, 13, 4];
let count = array.length - 1;

const sortBubble = array => {
    for (let i = count; i > 0; i--) {  
        let counter = 0;
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
                counter++;
            }
        }  
        if(counter === 0){
           return array;
        } 
    }
};

sortBubble(array);
console.log(array)
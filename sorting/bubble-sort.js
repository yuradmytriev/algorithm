let array = [2, 6, 1, 3, 13, 4];

const sort = () => {
  for(let g = 0; g < array.length - 1; g++) {
      for(let i = 0; i < array.length - 1; i++) {
        if(array[i] > array[i+1]) {
          [array[i], array[i+1]] = [array[i+1], array[i]];
        }
      }
  }
}

sort(array);


/* const sortBubble = (array) => {
    for (let i = array.length - 1; i > 0; i--) {  
        let counter = 0;
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j+1]) {
            
                [array[j], array[j+1]] = [array[j+1], array[j]];
                console.log(true)
                counter++;
            }
        }  
        if(counter === 0){
           return array;
        } 
    }

 };



————————————————————

let repeat = true;
let array = [2, 6, 1, 3, 8, 4, 5];
const count = array.length - 1;


const cycle = cb => {
    for (let j = 0; j < count; j++) {
    	// если в массиве хоть одно число больше предидущего то вызываем рекрсию
      if (array[j] > array[j + 1]) {
				// меняем элементы местами
        [array[j], array[j + 1]] = [array[j + 1], array[j]];

				// вызываем рекурсию
      	repeat = true;
        cb(repeat)
      }
    }
}

const recursion = repeat => {
  if (repeat) {
    repeat = false;
    cycle(recursion);
  }
}

recursion(repeat);
console.log(array);


    


      
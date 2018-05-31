let array = [2, 6, 1, 3, 13, 4];
let count = array.length - 1;

const replaceValue = (array, index) => {
  [array[index], array[index + 1]] = [array[index + 1], array[index]];
};

//bad performance
const sort = () => {
  for(let g = 0; g < count; g++) {
      for(let i = 0; i < count; i++) {
        if(array[i] > array[i+1]) {
          replaceValue(array, i);
        }
      }
  }
}

sort(array);
console.log(array)
      
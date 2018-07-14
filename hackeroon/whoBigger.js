const any = [1, 2, 3];
const bob = [0, 4, 5];

const whoBigger = (first, second) => {
	const score = [0, 0];
  
	first.map((item, index) => {
  	if(item > second[index]) {
    	score[0] = score[0] + 1;
    }
    else {
    	score[1] = score[1] + 1;
    }
  })
  return score
};

console.log(whoBigger(any, bob));
const array = [1, 2, 3, 4, 5];

const getArrayWithotValue = (array, value) => {
	const indexElem = array.indexOf(value);
  	const arrayClone = [...array];
  	arrayClone.splice( indexElem, 1 );
  
  	return arrayClone;
};
  
const getArraySum = array => 
	array.reduce((c, n) => c + n);
  
const minMaxSum = array => {
	const maxValue = Math.max.apply(null, array);
 	const minValue = Math.min.apply(null, array);
  
	const arrayWithotMax = getArrayWithotValue(array, maxValue);
	const arrayWithotMin = getArrayWithotValue(array, minValue);
  	const arrayMinSum = getArraySum(arrayWithotMin);
  	const arrayMaxSum = getArraySum(arrayWithotMax); 
  
  	console.log(arrayMaxSum, arrayMinSum);
};

minMaxSum(array); // 10, 14

const array = [1,2,3,4,5];

const arrayMax = array =>
	array.reduce((cur, next) =>
  		( cur > next ? cur : next ))

const result = arrayMax(array);

console.log(result);

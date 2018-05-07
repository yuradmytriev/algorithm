const f = [1, 3, 4];

function factorial(n) {
    // function that computes the number n!
    var acc = 1;
    while (n > 0) acc *= n--;
    return acc;
}
function facArray(params) {
    var f = [];
    for (var i=0; i<params.length; i++)
        f[i] = factorial(params[i]);
    return f[f.length - 1];
} 

const multy = (array) => {
	let sum = null;
	for(let i = 0; i < f.length - 1; i++) {
  	sum = array[i] * array[i + 1];
  }
  return sum;
}
const multyN = multy(f);
const factorialN = facArray(f);

const missNumber = (fac, multy) => 
	fac / multy;

console.log(missNumber(factorialN, multyN))
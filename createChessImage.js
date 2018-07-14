
const createChessImage = size => {
	let arr = [];
  let i = 0;
  while(i <= size) {
   	i % 2 === 0 ?
      	arr[i] = 'black' :
				arr[i] = 'red';

  	i++;
  }
  return arr;
}

const chessImage = createChessImage(8);

chessImage.map((item, index) => {
	$("#canvas").append( `<div class=${item}></div>` );
})


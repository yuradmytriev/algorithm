const grid2D = [
	[1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

const grid = [
	1, 2, 3, 4, 5,
  6, 7, 8, 9, 10,
  11, 12, 13, 14, 15,
]

//console.log(grid2D[1][0]);
// faster then grid2D flattern array
const gridIndex = (row, numCols, col) => row + numCols + col;
console.log(grid[gridIndex(1, 4, 0)]); // grid2D[1][0]



//


const createChessImage = size => {
	let arr = [];
  let i = 0;
  while(i <= size) {

     	(i % 3 === 0 || i % 5 === 0) ?
      	arr[i] = 'black' :
				arr[i] = 'red';


  	i++;
  }
  return arr;
}



const chessImage = createChessImage(15);

chessImage.map((item, index) => {
	$("#canvas").append( `<div class=${item}></div>` );
})


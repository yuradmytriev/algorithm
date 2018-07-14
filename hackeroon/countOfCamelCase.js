const isCharUpperCase = char => (char === char.toUpperCase());
  
const getCountOfCamleCase = string => { 
  let countOfCamleCase = 1;
  const arrayString = Array.from(string);
  
  arrayString.map((item, index) => {
  	if(isCharUpperCase(item)) {
    	countOfCamleCase++;
    }
  });
  
  return countOfCamleCase;
};

const result = getCountOfCamleCase('saveChangesInTheEditor');
console.log(result);


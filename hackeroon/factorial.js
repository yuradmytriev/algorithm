const destructionNumber = number => {
    const array = [];
    
     while (array.length < number) {
         array.push(number - array.length);
     }
      
     return array;
  };
   
  
  const factorial = number => {
  const factorialArray = destructionNumber(number);
    
      const result = factorialArray.reduce((c, n) => c * n);
        return result;
  };
  
  const factorialOfSix = factorial(6);
  
  Or
  
  ---------------------------------------------------------------------------------------------
  
  const factorial = number => {
      if(number == 1) return 1;
    
    return number * factorial(number - 1);
  };
  
  
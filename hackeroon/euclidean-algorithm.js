const euclideanAlgorithm = (originalA, originalB) => {
    const a = Math.abs(originalA);
    const b = Math.abs(originalB);
  
    if (a === 0 && b === 0) {
      return null;
    }
  
    if (a === 0 && b !== 0) {
      return b;
    }
  
    if (a !== 0 && b === 0) {
      return a;
    }
  
    if (a > b) {
      return euclideanAlgorithm(a % b, b);
    }
  
    return euclideanAlgorithm(b % a, a);
  };
  
  const result = euclideanAlgorithm(10, 15);
  
  
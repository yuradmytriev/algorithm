const testString = 'SOSSPSSQSSOR';
const patternString = 'SOS';

  
const checkSignalDifference = (string, patternString) => { 
	
        let count = 0;
        for (let i = 0; i < string.length; i++) {
            if (string.charAt(i) != patternString.charAt(i % 3)) count++;
        }
        
        return count;
  
};

checkSignalDifference(testString, patternString); 


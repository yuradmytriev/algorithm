const array = [ 1, 2, 3, 4 ];

const getHalf = values => Math.floor( values.length / 2 );
const isEven = values => values.length % 2;
const getSumCenterValues = (values, half) => (values[half-1] + values[half]);

const median = values => {

    const sortedValues = values.sort()
    const half = getHalf(values);
    
    return isEven(sortedValues) ?
        sortedValues[half] :
 				getSumCenterValues(sortedValues, half) / 2;
        
};
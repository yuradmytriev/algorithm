// args('*', '1', 'b', '1c') => '1*b*1c'

const getStr = (...args) => args.slice(1).join(args[0]);

const str = getStr('*', '1', 'b', '1c');

// explanation

//  args.slice(1) - return new array
// join(args[0]) - create new string


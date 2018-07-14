const a = [1, 2, 3];
const b = [1, 2, 4];

const difference = (first, second) => {
  const filtered = new Set(second);
  return first.filter(x => !filtered.has(x));
};


const result = difference(a, b);


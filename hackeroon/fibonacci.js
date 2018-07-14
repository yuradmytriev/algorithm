const fibonacci = numberPosition => {

  if (numberPosition === 1) {
    return 1;
  }

  let iterationsCounter = numberPosition - 1;

  let fib = null;
  let fibPrev = 1;
  let fibPrevPrev = 0;

  while (iterationsCounter) {

    fib = fibPrev + fibPrevPrev;

    fibPrevPrev = fibPrev;
    fibPrev = fib;
    iterationsCounter -= 1;
  }

  return fib;
}

console.log(fibonacci(10))
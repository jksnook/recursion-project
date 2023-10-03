function fibs (n) {
  let fibArray = [0, 1];

  for (i = 0; i < n - 2; i++) {
    fibArray.push(fibArray[i] + fibArray[i + 1]);
  }

  return fibArray;
}

function fibsRec (n) {
  if (n <= 2) return [0, 1];

  let shorterFibs = fibsRec(n - 1);
  return shorterFibs.concat(shorterFibs[n - 2] + shorterFibs[n - 3]);
}
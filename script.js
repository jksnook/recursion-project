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

function mergeSort(a) {
  if (a.length === 1) return a;

  function merge(b, c) {
    const sorted = [];
    while (b.length > 0 || c.length > 0) {
      if (b[0] > c[0] || b.length === 0) {
        sorted.push(c.shift());
      } else {
        sorted.push(b.shift());
      }
    }
    return sorted;
  }

  let firstHalf = a.slice(0, (a.length - a.length % 2) / 2);
  let secondHalf = a.slice((a.length - a.length % 2) / 2);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

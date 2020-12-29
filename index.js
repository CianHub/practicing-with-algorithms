const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumArray(arr, newTot) {
  if (arr.length > 0) {
    newTot = newTot + arr[0];
    arr.shift();
    return sumArray(arr, newTot);
  }
  return newTot;
}

function arrayItemCounter(arr, newTot) {
  if (arr.length > 0) {
    newTot++;
    arr.shift();
    return arrayCounter(arr, newTot);
  }
  return newTot;
}

function arrayMaxNum(arr, max) {
  if (arr.length > 0) {
    max = arr[0] > max ? arr[0] : max;
    arr.shift();
    return arrayMaxNum(arr, max);
  }
  return max;
}

function getRandomNumber(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function binarySearchExample(arr, rand) {
  if (arr.length === 1) {
    return arr[0];
  }

  const numberToFindIdx = Math.round(arr.length / 2);

  if (arr[numberToFindIdx] === rand) {
    return arr[numberToFindIdx];
  }

  let newArr =
    arr[numberToFindIdx] > rand
      ? [...arr].slice(0, numberToFindIdx)
      : [...arr].slice(numberToFindIdx, arr.length);

  return binarySearchExample(newArr, rand);
}

console.log(binarySearchExample(arr, getRandomNumber(arr)));

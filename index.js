function sumOfArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function multiplyValue(arr) {
  return arr.reduce((a, b) => a * b, 0);
}

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

function findMin(arr) {
  if (arr.length == 0) {
    return undefined;
  }
  return arr.reduce((a, b) => (a < b ? a : b), arr[0]);
}

function findMax(arr) {
  if (arr.length == 0) {
    return undefined;
  }
  return arr.reduce((a, b) => (a > b ? a : b), arr[0]);
}

function reverseArray(arr) {
  if (arr.length == 0) {
    return undefined;
  }

  return arr.slice().reverse();
}

function getArrayAvarage(arr) {
  if (arr.length == 0) {
    return undefined;
  }

  let sum = sumOfArray(arr);
  return sum / arr.length;
}

function getArrayAfter(arr, index) {
  if (arr.length == 0 || index >= arr.length) {
    return undefined;
  }

  return arr.slice(index);
}

function multiplyByNumber(arr, num) {
  if (arr.length == 0) {
    return undefined;
  }

  let newArr = arr.map((el) => el * num);
  return newArr;
}

function concateArray(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return undefined;
  }
  return arr1.concat(arr2);
}

const AllFunc = {
  sumOfArray,
  multiplyValue,
  removeDuplicates,
  findMin,
  findMax,
  reverseArray,
  getArrayAvarage,
  getArrayAfter,
  multiplyByNumber,
  concateArray,
};

module.exports = AllFunc;

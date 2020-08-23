import _ from "lodash";

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(5));

const arr = [1, 2];
const arr1 = [2, 3];

console.log(_.intersection(arr, arr1));

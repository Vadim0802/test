const isSimpleNumber = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const sayPrimeOrNot = (number) => {
  const result = isSimpleNumber(number) ? 'yes' : 'no';
  console.log(result);
};

export {
  isSimpleNumber,
  sayPrimeOrNot,
};
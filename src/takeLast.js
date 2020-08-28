const run = (text) => {
  const takeLast = (text, n) => {
    if (text.length === 0 || text.length < n) {
      return null;
    }

    const reverseCharText = text.split('');
    const reverseLastElem = reverseCharText.reverse().slice(0, n);

    return reverseLastElem.join('');
  };
  return takeLast(text, 4);
};


const takeLast = (str, n) => {
  if (str.length < n) {
    return null;
  }

  const result = [];
  for (let i = str.length - 1; result.length < n; i -= 1) {
    result.push(str[i]);
  }

  return result.join('');
};
export default run;
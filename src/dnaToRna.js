const dnaToRna = (dnk) => {
  if (dnk.length === 0) {
    return '';
  }

  const replace = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  }

  let result = '';
  for (let i = 0; i < dnk.length; i++) {
    const elem = dnk[i];

    if (replace.hasOwnProperty(elem)) {
      result += replace[elem];
    } else {
      return null;
    }
  }

  return result;
};
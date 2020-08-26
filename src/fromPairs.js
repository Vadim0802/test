export const fromPairs = (pairArr) => {
  const result = {};

  for (const [key, value] of pairArr) {
    result[key] = value;
  }

  return result;
};
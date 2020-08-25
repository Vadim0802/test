import _ from '../main.js';

const pick = (data, keys) => {
  const result = {};

  const entries = Object.entries(data);
  for (const [key, value] of entries) {
    if (keys.includes(key)) {
      result[key] = value;
    }
  }

  return result;
};

export default pick;
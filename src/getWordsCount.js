import _ from '../main.js';

export const content = 'cat dog cat eye see cat dog';

export const getWordsCount = (arr) => {
  const newContent = arr.split(' ');
  const result = {};

  for (const item of newContent) {
    result[item] = _.get(result, item, 0) + 1;
  }

  return result;
};
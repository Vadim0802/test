import _ from '../main.js';

export const getSortedNames = (users) => {
  const result = [];

  for (const {name: userName} of users) {
    result.push(userName);
  }

  return result.sort();
};
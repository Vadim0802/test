import _ from '../main.js';

export const lessonMembers = {
  syntax: 3,
  using: 2,
  foreach: 10,
  operations: 10,
  destructuring: 2,
  array: 2,
};

export const findKeys = (obj, expectedValue) => {
  const result = [];

  const entries = Object.entries(obj);
  for (const [key, value] of entries) {
    if (value === expectedValue) {
      result.push(key);
    }
  }

  return result;
};
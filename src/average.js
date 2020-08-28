import { _ } from '../main.js';

export const average = (...numbers) => {
  if (numbers.length === 0) {
    return null;
  }

  return _.sum(numbers) / numbers.length;
};
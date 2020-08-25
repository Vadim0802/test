import { _ , crc32 } from '../main.js';

const make = () => {
  const hashTable = [];

  return hashTable;
};

const isCollision = (hash, key, map) => {
  if (typeof map[hash] === 'undefined') {
    return false;
  }
  const [keyElem] = map[hash];
  if (keyElem === key) {
    return false;
  }
  const hashEqual = crc32.str(keyElem) === crc32.str(key);
  
  return hashEqual;
};

const set = (map, key, value) => {
  const keyValue = [key, value];
  const hash = Math.abs(crc32.str(key) % 1000);

  if (isCollision(hash, key, map)) {
    return false;
  }

  map[hash] = keyValue;

  return true;
};

const get = (map, key, defaultValue = null) => {
  const hash = Math.abs(crc32.str(key) % 1000);

  if (typeof(map[hash]) === 'undefined') {
    return defaultValue;
  }
  if (isCollision(hash, key, map)) {
    return defaultValue;
  }

  const result = map[hash][1];
  return result;
};

export {
  make,
  set,
  get,
  isCollision,
};
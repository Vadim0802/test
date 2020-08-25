import _ from '../main.js';

export const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};

export const getIn = (obj, path) => {
  if (!_.has(obj, path)) {
    return null;
  }

  return _.get(obj, path);
};
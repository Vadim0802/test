import { _ } from '../main.js';

export const users = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
  {
    name: 'Sam',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [
      { name: 'Taywin', gender: 'male' },
    ],
  },
];

export const userOne = [
  {
    name: 'Rob',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ]
  }
]

export const userTwo = [
  {
    name: 'Jack',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Taywin', gender: 'male' },
      { name: 'Ramsey', gender: 'male' },
    ]
  }
]

export const getFemaleFriends = (users) => {
  const femaleFriends = users
  .map((users) => users.friends)
  .flat()
  .filter(({ gender }) => gender === 'female');

  return femaleFriends;
};

export const getCommonFriends = (users1, users2) => {
  const friends1 = users1.map(({ friends }) => friends).flat();
  const friends2 = users2.map(({ friends }) => friends).flat();

  return _.intersectionBy(friends1, friends2, 'name');
}

export const users1 = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn' }, // friends отсутствует
  {
    name: 'Sam',
    friends: [
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [
      { name: 'Taywin', gender: 'male' },
    ],
  },
];

export const countFriends = (users, greaterThen = 0) => {
  const greaterThenFriends = users.reduce((acc, user) => {
    const anyFriends = user.hasOwnProperty('friends') ? user.friends.length : 0;
    return acc + Number(anyFriends > greaterThen);
  }, 0);

  return greaterThenFriends;
};
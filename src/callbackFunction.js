import { _ } from '../main.js';

const usersArr = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
];

export const takeOldest = (users, counter = 1) => {
  const sortedUser = users.sort((a, b) => {
    return Math.sign(Date.parse(a.birthday) - Date.parse(b.birthday));
  });
  return sortedUsers.slice(0, counter);
};

export const anotherTakeOldest = (users, counter = 1) => {
  const sortedUsers = _.sortBy(users, ({ birthday }) => Date.parse(birthday));
  return sortedUsers.slice(0, counter);
}

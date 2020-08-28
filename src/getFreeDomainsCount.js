import { _ } from '../main.js';

export const emailsList = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];

export const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
];

export const getFreeDomainsCount = (emails) => {
  const freeEmails = emails
    .map((email) => {
      const [, domain] = email.split('@');
      return domain;
    })
    .filter((domain) => freeEmailDomains.includes(domain))
    .reduce((acc, domain) => {
      const count = _.get(acc, domain, 0) + 1;
      return { ...acc, [domain]: count };
    }, {});
  return freeEmails;
};
import _ from '../main.js';

export const firstSemesterSubjects = {
  chemistry: {
    faculty: 'Chemistry faculty',
    teacher: 'Ivanov',
  },
  law: {
    // какие-то характеристики
  },
  informatics: null,
  microeconomics: {
    // какие-то характеристики
  },
};

export const secondSemesterSubjects = {
  microeconomics: null,
  chemistry: {
    faculty: 'Chemistry faculty',
    teacher: 'Ivanov',
  },
  informatics: {
    // какие-то характеристики
  },
};

export const getRemovedSubjects = (first, second) => {
  const removedSubjects = [];
  const firstSemestrSubj = Object.keys(first);

  for (const subj of firstSemestrSubj) {
    if (!second.hasOwnProperty(subj)) {
      removedSubjects.push(subj);
    }
  }

  return removedSubjects;
};
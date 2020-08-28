export const convertDate = (...data) => {
  const formattedDates = [];

  for (const item of data) {
    const date = new Date(...item);
    formattedDates.push(date.toDateString());
  }

  return formattedDates;
};

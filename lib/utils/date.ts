/** Calculate the difference in years between the current date and a given date. */
export const calculateYearDifference = (givenDate: Date | string): number => {
  const parsedDate = new Date(givenDate);
  if (isNaN(parsedDate.getTime())) {
    throw new Error(`Invalid date provided: ${givenDate}`);
  }

  const currentDate = new Date();
  let yearsDifference = currentDate.getFullYear() - parsedDate.getFullYear();
  const monthDifference = currentDate.getMonth() - parsedDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < parsedDate.getDate())
  ) {
    yearsDifference--;
  }
  return yearsDifference;
};

export const getCurrentDate = () => {
  const date = new Date(),
  year = date.getFullYear(),
	month = date.getMonth();

  return { date, month, year }
}

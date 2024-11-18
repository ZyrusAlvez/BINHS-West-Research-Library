export function getMonthName(monthNumber){
  switch (monthNumber) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Invalid month";
  }
};


export function getFirstDayOfMonth(year, month){
  // Create a new Date object for the 1st day of the month
  const firstDay = new Date(year, month - 1, 1); // month - 1 because months are zero-indexed

  // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayNumber = firstDay.getDay();
  return dayNumber
};
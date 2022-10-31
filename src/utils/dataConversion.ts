export const convertCelciusAndFarenheit = (
  temp: number,
  isCelcius: boolean
) => {
  if (isCelcius) {
    return ((temp - 32) * 5) / 9;
  } else {
    return temp * (9 / 5) + 32;
  }
};

export const convertDay = (date: string) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const actualDate = new Date(date);
  const dayIndex = actualDate.getDay();
  const day = actualDate.getDate();
  const month = actualDate.getMonth();

  let dateOrdinal;

  if (dayIndex > 3 && dayIndex < 21) return 'th';
  switch (dayIndex % 10) {
    case 1:
      dateOrdinal = day + 'st';
    case 2:
      dateOrdinal = day + 'nd';
    case 3:
      dateOrdinal = day + 'rd';
    default:
      dateOrdinal = day + 'th';
  }

  const actualDay = days[dayIndex];
  const actualMonth = months[month];

  const result = `${actualDay} ${dateOrdinal} ${actualMonth}`;

  return result;
};

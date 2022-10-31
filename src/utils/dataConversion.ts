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

export const isHigh = (temperatureScale: boolean, temperature: number) => {
  if (
    (temperatureScale && temperature >= 30) ||
    (!temperatureScale && temperature >= 86)
  ) {
    return true;
  } else {
    return false;
  }
};

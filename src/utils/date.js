const padding = (number, length) => {
  return String(number).padStart(length, '0');
};

export const format = (date, fmt) => {
  return fmt
    .replace(/YYYY/, date.getFullYear())
    .replace(/MM/, padding(date.getMonth() + 1, 2))
    .replace(/DD/, padding(date.getDate(), 2));
};

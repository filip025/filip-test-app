export const hasOnlyNumbersCommasDots = (value: string): boolean => {
  return /^(?!,$)[\d,.]+$/.test(value);
};

export const numberWithCommas = (value: string): string => {
  if (!value || value === "") return "";
  if (!hasOnlyNumbersCommasDots(value))
    return value.substring(0, value.length - 1);
  if (value[value.length - 1] === ".") return value;

  const nonFormatedValue = value.replace(/,/g, "");
  return Number(nonFormatedValue).toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });
};

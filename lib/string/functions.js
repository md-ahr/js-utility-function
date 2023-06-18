export const reverseText = (str) => str.split("").reverse().join("");

export const reverseWords = (str) => str.split(" ").reverse().join(" ");

export const truncateWord = (str, maxLength) => {
  if (str.length <= maxLength) return str;
  return `${str.substring(0, maxLength - 3)}...`;
};

export const capitalizeLetter = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const containsOnlyDigits = (str) => /^\d+$/.test(str);

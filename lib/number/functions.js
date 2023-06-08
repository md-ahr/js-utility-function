export const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min);

export const convertToBanglaDigit = (number) => {
    const digitMap = {
        0: "০",
        1: "১",
        2: "২",
        3: "৩",
        4: "৪",
        5: "৫",
        6: "৬",
        7: "৭",
        8: "৮",
        9: "৯",
    };
    return String(number).replace(/\d/g, (digit) => digitMap[digit]);
};

export const isNegative = (number) => number < 0;

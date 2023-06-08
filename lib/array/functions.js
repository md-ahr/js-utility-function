export const uniqueArray = (arr) => [...new Set(arr)];

export const removeFalsyItems = (arr) => arr.filter(Boolean);

export const mergedArray = (...arr) => [...new Set(arr.flat())];

export const commonElements = (...arr) =>
    arr.reduce((accumulator, currentArray) =>
        accumulator.filter((element) => currentArray.includes(element))
    );

export const areArraysEqual = (...arr) =>
    arr.every(
        (element, index) => JSON.stringify(element) === JSON.stringify(arr[0])
    );

export const shuffledArray = (arr) => arr.sort(() => Math.random() - 0.5);

export const flattenedArray = (multDimArr) => {
    return multDimArr.reduce(
        (result, element) =>
            result.concat(
                Array.isArray(element) ? flattenedArray(element) : element
            ),
        []
    );
};

import {
    uniqueArray,
    removeFalsyItems,
    mergedArray,
    commonElements,
    areArraysEqual,
    shuffledArray,
    flattenedArray,
} from "./lib/array/index.js";

import {
    isObjectEmpty,
    removeFalsyValues,
    getAllCookiesAsObject,
    getAllLocalStorageItems,
} from "./lib/object/index.js";

import {
    getRandomNumber,
    convertToBanglaDigit,
    isNegative,
} from "./lib/number/index.js";

import {
    capitalizeLetter,
    reverseText,
    reverseWords,
    truncateWord,
    containsOnlyDigits,
} from "./lib/string/index.js";

import {
    differenceInDays,
    addAMPM,
    extractDateTimeComponents,
    formatDuration,
    formatDateIso,
    formatDate,
} from "./lib/date/index.js";

import {
    getAllSiblings,
    isScrollAtTop,
    isScrollAtBottom,
    copyToClipboard,
    getDeviceType,
    isBrowser,
    isNodeJS,
    isElementInFocus,
    isElementVisible,
} from "./lib/dom/index.js";

import {
    randomHexColorCode,
    getUrlParams,
    generateUUID,
    rgbToHex,
    hexToRgb,
    setCookie,
    getCookie,
    deleteCookie,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    convertToHTMLEntities,
} from "./lib/misc/index.js";

console.log(uniqueArray([2, 6, 6, 3, 2, 8]));

console.log(
    getUrlParams("https://www.google.com.hk/search?q=js+md&page=1&perpage=10")
);

console.log(isObjectEmpty({}));

console.log(randomHexColorCode());

console.log(
    removeFalsyItems([0, 1, false, true, "", "hello", null, undefined, NaN])
);

console.log(mergedArray([1, 2, 3], [2, 3, 4], [5, 4]));

console.log(commonElements([1, 2, 3], [2, 3, 4], [4, 5, 3]));

console.log(areArraysEqual([1, 2, 3], [1, 2, 3], [1, 2, 3]));

console.log(generateUUID());

console.log(rgbToHex(205, 143, 89));

console.log(hexToRgb("#cd8f59"));

console.log(shuffledArray([5, 3, 2, 15, 6]));

console.log(flattenedArray([[1, 2, [3]], 4, [5, [6, 7, [36, 45, [9]]]]]));

console.log(
    removeFalsyValues({
        prop1: "value1",
        prop2: null,
        prop3: "",
        prop4: { x: 0, y: 3 },
        prop5: "value5",
    })
);

setCookie("username", "Abdul Halim", "Fri, 31 Dec 2023 23:59:59 GMT");
setCookie("email", "ahr@gmail.com", "Fri, 31 Dec 2023 23:59:59 GMT");

console.log(getCookie("username"));

deleteCookie("username");

console.log(getAllCookiesAsObject());

localStorage.setItem("test", "123");
console.log(getAllLocalStorageItems());

console.log(`68°F = ${fahrenheitToCelsius(68)}°C`);

console.log(`20°C = ${celsiusToFahrenheit(20)}°F`);

console.log(convertToBanglaDigit(462));

console.log(
    convertToHTMLEntities('<script>alert("Hello & Welcome");</script>')
);

console.log(getRandomNumber(1, 100));

console.log(isNegative(-1));

console.log(reverseText("halim"));

console.log(reverseWords("Hello World! How are you?"));

console.log(
    truncateWord("Lorem ipsum dolor sit amet, consectetur adipiscing elit", 18)
);

console.log(capitalizeLetter("My name is rony"));

console.log(containsOnlyDigits("123"));

console.log(differenceInDays(new Date("2022-01-01"), new Date("2022-01-8")));

console.log(addAMPM(18));

console.log(extractDateTimeComponents(new Date()));

console.log(formatDuration(3665));

console.log(formatDateIso(new Date()));

console.log(formatDate(new Date("2023-02-03")));

console.log(getAllSiblings(document.getElementById("myElement")));

window.addEventListener("scroll", function () {
    if (isScrollAtTop()) {
        console.log("Scrolled to the top of the page!");
    }
    if (isScrollAtBottom()) {
        console.log("Scrolled to the bottom of the page!");
    }
});

document.getElementById("btn").addEventListener("click", () => {
    console.log(copyToClipboard("hello buddy"));
});

console.log(getDeviceType());

console.log(isBrowser());

console.log(isNodeJS());

console.log(isElementInFocus(document.getElementById("input")));

console.log(isElementVisible(document.getElementById("text")));

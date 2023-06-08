const fs = require("fs");

const readmeContent = `
## Some Useful JavaScript Utility Functions

This repository contains various utility functions for JavaScript programming. The functions are categorized into different modules based on their functionality.

### Table of Contents
- [Package Installation](#package-installation)
- [Usage](#usage)
  - [Array](#array)
  - [Object](#object)
  - [Number](#number)
  - [String](#string)
  - [Date](#date)
  - [DOM](#dom)
  - [Miscellaneous](#miscellaneous)

#### Package Installation

\`\`\`bash
npm install js-utils
\`\`\`

\`\`or\`\`

\`\`\`bash
yarn add js-utils
\`\`\`

### Usage

#### Array

-   \`uniqueArray(array)\`: Returns a new array with unique elements.
-   \`removeFalsyItems(array)\`: Removes falsy values from an array.
-   \`mergedArray(...arrays)\`: Merges multiple arrays into one array with unique elements.
-   \`commonElements(...arrays)\`: Returns an array of common elements among multiple arrays.
-   \`areArraysEqual(...arrays)\`: Checks if multiple arrays are equal.
-   \`shuffledArray(array)\`: Returns a new array with shuffled elements.
-   \`flattenedArray(array)\`: Flattens a multi-dimensional array into a one-dimensional array.

\`\`\`javascript
import { uniqueArray, removeFalsyItems, mergedArray, commonElements, areArraysEqual, shuffledArray, flattenedArray } from "my-awesome-library/array";

console.log(uniqueArray([2, 6, 6, 3, 2, 8]));

console.log(removeFalsyItems([0, 1, false, true, "", "hello", null, undefined, NaN]));

console.log(mergedArray([1, 2, 3], [2, 3, 4], [5, 4]));

console.log(commonElements([1, 2, 3], [2, 3, 4], [4, 5, 3]));

console.log(areArraysEqual([1, 2, 3], [1, 2, 3], [1, 2, 3]));

console.log(shuffledArray([5, 3, 2, 15, 6]));

console.log(flattenedArray([[1, 2, [3]], 4, [5, [6, 7, [36, 45, [9]]]]]));
\`\`\`

#### Object

-   \`isObjectEmpty(object)\`: Checks if an object is empty.
-   \`removeFalsyValues(object)\`: Removes falsy values from an object.
-   \`getAllCookiesAsObject()\`: Returns all cookies as an object.
-   \`getAllLocalStorageItems()\`: Returns all items from the local storage as an object.

\`\`\`javascript
import { isObjectEmpty, removeFalsyValues, getAllCookiesAsObject, getAllLocalStorageItems } from "my-awesome-library/object";

console.log(isObjectEmpty({}));

console.log(removeFalsyValues({ prop1: "value1", prop2: null, prop3: "", prop4: { x: 0, y: 3 }, prop5: "value5" }));

setCookie("username", "Abdul Halim", "Fri, 31 Dec 2023 23:59:59 GMT");
setCookie("email", "ahr@gmail.com", "Fri, 31 Dec 2023 23:59:59 GMT");

console.log(getAllCookiesAsObject());

localStorage.setItem("test", "123");
console.log(getAllLocalStorageItems());
\`\`\`

#### Number

-   \`getRandomNumber(min, max)\`: Generates a random integer within the given range.
-   \`convertToBanglaDigit(number)\`: Converts English digits to Bangla digits.
-   \`isNegative(number)\`: Checks if a number is negative.

\`\`\`javascript
import { getRandomNumber, convertToBanglaDigit, isNegative } from "my-awesome-library/number";

console.log(getRandomNumber(1, 100));

console.log(convertToBanglaDigit(462));

console.log(isNegative(-1));
\`\`\`

#### String

-   \`capitalizeLetter(string)\`: Capitalizes the first letter of a string.
-   \`reverseText(string)\`: Reverses the characters in a string.
-   \`reverseWords(string)\`: Reverses the words in a string.
-   \`truncateWord(string, maxLength)\`: Truncates a word in a long string.
-   \`containsOnlyDigits(string)\`: Checks if a string contains only digits.

\`\`\`javascript
import { capitalizeLetter, reverseText, reverseWords, truncateWord, containsOnlyDigits } from "my-awesome-library/string";

console.log(capitalizeLetter("My name is rony"));

console.log(reverseText("halim"));

console.log(reverseWords("Hello World! How are you?"));

console.log(truncateWord("Lorem ipsum dolor sit amet, consectetur adipiscing elit", 18));

console.log(containsOnlyDigits("123"));
\`\`\`

#### Date

-   \`differenceInDays(date1, date2)\`: Calculates the difference in days between two dates.
-   \`addAMPM(hour)\`: Adds the AM/PM suffix to an hour.
-   \`extractDateTimeComponents(date)\`: Extracts the year, month, day, hour, minute, second, and millisecond from a date.
-   \`formatDuration(seconds)\`: Formats the duration in seconds to HH:MM:SS format.
-   \`formatDateIso(date)\`: Converts a date to the YYYY-MM-DD format.
-   \`formatDate(date)\`: Converts a date to the Month Date, Year (e.g., 8th Jun, 2023) format.

\`\`\`javascript
import { differenceInDays, addAMPM, extractDateTimeComponents, formatDuration, formatDateIso, formatDate } from "my-awesome-library/date";

console.log(differenceInDays(new Date("2022-01-01"), new Date("2022-01-08")));

console.log(addAMPM(18));

console.log(extractDateTimeComponents(new Date()));

console.log(formatDuration(3665));

console.log(formatDateIso(new Date()));

console.log(formatDate(new Date("2023-02-03")));
\`\`\`

#### DOM

-   \`getAllSiblings(element)\`: Returns an array of all siblings of an element.
-   \`isScrollAtTop()\`: Checks if the user has scrolled to the top of the page.
-   \`isScrollAtBottom()\`: Checks if the user has scrolled to the bottom of the page.
-   \`copyToClipboard(text)\`: Copies the specified text to the clipboard.
-   \`getDeviceType()\`: Returns the type of device (desktop, mobile, tablet).
-   \`isBrowser()\`: Checks if the code is running in a browser environment.
-   \`isNodeJS()\`: Checks if the code is running in Node.js environment.
-   \`isElementInFocus(element)\`: Checks if an element is currently in focus.
-   \`isElementVisible(element)\`: Checks if an element is visible in the viewport.

\`\`\`javascript
import { getAllSiblings, isScrollAtTop, isScrollAtBottom, copyToClipboard, getDeviceType, isBrowser, isNodeJS, isElementInFocus, isElementVisible } from "my-awesome-library/dom";

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
\`\`\`

#### Miscellaneous

-   \`randomHexColorCode()\`: Generates a random hexadecimal color code.
-   \`getUrlParams(url)\`: Extracts query parameters from a URL.
-   \`generateUUID()\`: Generates a random UUID.
-   \`rgbToHex(r, g, b)\`: Converts RGB color values to a hexadecimal color code.
-   \`hexToRgb(hex)\`: Converts a hexadecimal color code to RGB color values.
-   \`setCookie(name, value, expires)\`: Sets a cookie with the specified name, value, and expiration date.
-   \`getCookie(name)\`: Retrieves the value of a cookie by its name.
-   \`deleteCookie(name)\`: Deletes a cookie by its name.
-   \`fahrenheitToCelsius(fahrenheit)\`: Converts a temperature value from Fahrenheit to Celsius.
-   \`celsiusToFahrenheit(celsius)\`: Converts a temperature value from Celsius to Fahrenheit.
-   \`convertToHTMLEntities(text)\`: Converts special characters to HTML entities.

\`\`\`javascript
import { randomHexColorCode, getUrlParams, generateUUID, rgbToHex, hexToRgb, setCookie, getCookie, deleteCookie, fahrenheitToCelsius, celsiusToFahrenheit, convertToHTMLEntities } from "my-awesome-library/misc";

console.log(randomHexColorCode());

console.log(getUrlParams("https://www.google.com.hk/search?q=js+md&page=1&perpage=10"));

console.log(generateUUID());

console.log(rgbToHex(205, 143, 89));

console.log(hexToRgb("#cd8f59"));

setCookie("username", "Abdul Halim", "Fri, 31 Dec 2023 23:59:59 GMT");
setCookie("email", "ahr@gmail.com", "Fri, 31 Dec 2023 23:59:59 GMT");

console.log(getCookie("username"));

deleteCookie("username");

console.log('68°F = fahrenheitToCelsius(68)°C');

console.log('20°C = celsiusToFahrenheit(20)°F');

console.log(convertToHTMLEntities('<script>alert("Hello & Welcome");</script>'));
\`\`\`

---

This repository also includes example usage of these utility functions. Feel free to explore and experiment with them.

If you have any questions or suggestions, please open an issue or submit a pull request.

Happy coding!`;

// Remove the unwanted lines
const updatedReadmeContent = readmeContent.replace(
    /- \[Some Useful JavaScript Utility Functions\]\(#some-useful-javascript-utility-functions\).*\n/g,
    ""
);

// Write README content to a Markdown file
fs.writeFileSync("README.md", updatedReadmeContent.trim());

console.log("README file created successfully!");

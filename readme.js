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

\***or\***

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
import {
    uniqueArray,
    removeFalsyItems,
    mergedArray,
    commonElements,
    areArraysEqual,
    shuffledArray,
    flattenedArray
} from "js--utils/array";
\`\`\`

\`\`\`javascript
uniqueArray([2, 6, 6, 3, 2, 8]);

Output: [2, 6, 3, 8]
\`\`\`

\***Explanation:\*** The uniqueArray function takes an array as input and returns a new array that contains only the unique elements from the input array. In this case, the input array is [2, 6, 6, 3, 2, 8], and the output is [2, 6, 3, 8], as it removes the duplicate elements and only keeps the unique ones.

\`\`\`javascript
removeFalsyItems([0, 1, false, true, "", "hello", null, undefined, NaN]);

Output: [1, true, "hello"]
\`\`\`

\***Explanation:\*** The removeFalsyItems function removes all falsy values from the array. In the given input array, the falsy values are 0, false, "", null, undefined, and NaN. The output array contains only the truthy values [1, true, "hello"].

\`\`\`javascript
mergedArray([1, 2, 3], [2, 3, 4], [5, 4]);

Output: [1, 2, 3, 4, 5]
\`\`\`

\***Explanation:\*** The mergedArray function merges multiple arrays into a single array. In this case, the input arrays are [1, 2, 3], [2, 3, 4], and [5, 4]. The output array contains all unique elements from the input arrays, resulting in [1, 2, 3, 4, 5].

\`\`\`javascript
commonElements([1, 2, 3], [2, 3, 4], [4, 5, 3]);

Output: [3]
\`\`\`

\***Explanation:\*** The commonElements function returns an array containing the common elements among the input arrays. In this case, the common element between [1, 2, 3], [2, 3, 4], and [4, 5, 3] is 3, so the output is [3].

\`\`\`javascript
areArraysEqual([1, 2, 3], [1, 2, 3], [1, 2, 3]);

Output: true
\`\`\`

\***Explanation:\*** The areArraysEqual function checks if multiple arrays are equal. In this case, all the input arrays [1, 2, 3] are the same, so the output is true.

\`\`\`javascript
shuffledArray([5, 3, 2, 15, 6]);

Output: A randomly shuffled array, e.g., [6, 2, 3, 5, 15]
\`\`\`

\***Explanation:\*** The shuffledArray function shuffles the elements of the input array randomly. The output will be a new array with the elements rearranged in a random order.

\`\`\`javascript
flattenedArray([[1, 2, [3]], 4, [5, [6, 7, [36, 45, [9]]]]]);

Output: [1, 2, 3, 4, 5, 6, 7, 36, 45, 9]
\`\`\`

\***Explanation:\*** The flattenedArray function converts a nested array into a single-level array. \nThe output is obtained by flattening the nested array [[1, 2, [3]], 4, [5, [6, 7, [36, 45, [9]]]]], \nresulting in [1, 2, 3, 4, 5, 6, 7, 36, 45, 9].

---

#### Object

-   \`isObjectEmpty(object)\`: Checks if an object is empty.
-   \`removeFalsyValues(object)\`: Removes falsy values from an object.
-   \`getAllCookiesAsObject()\`: Returns all cookies as an object.
-   \`getAllLocalStorageItems()\`: Returns all items from the local storage as an object.

\`\`\`javascript
import {
    isObjectEmpty,
    removeFalsyValues,
    getAllCookiesAsObject,
    getAllLocalStorageItems
} from "js--utils/object";
\`\`\`

\`\`\`javascript
isObjectEmpty({});

Output: true
\`\`\`

\***Explanation:\*** The isObjectEmpty function checks if an object is empty. In this case, the input object {} has no properties, so it is considered empty.

\`\`\`javascript
removeFalsyValues({ prop1: "value1", prop2: null, prop3: "", prop4: { x: 0, y: 3 }, prop5: "value5" });

Output: { prop1: "value1", prop4: { x: 0, y: 3 }, prop5: "value5" }
\`\`\`

\***Explanation:\*** The removeFalsyValues function removes falsy values from an object. In the given input object, the properties prop2 (null) and prop3 (empty string) are considered falsy and are removed from the output object.

\`\`\`javascript
getAllCookiesAsObject();

Output: { username: "Abdul Halim", email: "ahr@gmail.com" }
\`\`\`

\***Explanation:\*** The getAllCookiesAsObject function retrieves all cookies as an object. In this case, the cookies set previously with the keys "username" and "email" are returned as an object.

\`\`\`javascript
localStorage.setItem("test", "123");

getAllLocalStorageItems();

Output: { test: "123" }
\`\`\`

\***Explanation:\*** The getAllLocalStorageItems function retrieves all items stored in the local storage as an object. In this case, the item with the key "test" and value "123" is returned.

---

#### Number

-   \`getRandomNumber(min, max)\`: Generates a random integer within the given range.
-   \`convertToBanglaDigit(number)\`: Converts English digits to Bangla digits.
-   \`isNegative(number)\`: Checks if a number is negative.

\`\`\`javascript
import {
    getRandomNumber,
    convertToBanglaDigit,
    isNegative
} from "js--utils/number";
\`\`\`

\`\`\`javascript
getRandomNumber(1, 100);

Output: 42
\`\`\`

\***Explanation:\*** This function generates a random integer within the given range, inclusive of both the minimum and maximum values.

\`\`\`javascript
convertToBanglaDigit(462);

Output: ৪৬২
\`\`\`

\***Explanation:\*** This function converts English digits to Bangla digits. It takes a number as input and returns a string with the Bangla digit representation.

\`\`\`javascript
isNegative(-1);

Output: true
\`\`\`

\***Explanation:\*** This function checks if a number is negative. It takes a number as input and returns true if the number is negative, and false otherwise.

---

#### String

-   \`capitalizeLetter(string)\`: Capitalizes the first letter of a string.
-   \`reverseText(string)\`: Reverses the characters in a string.
-   \`reverseWords(string)\`: Reverses the words in a string.
-   \`truncateWord(string, maxLength)\`: Truncates a word in a long string.
-   \`containsOnlyDigits(string)\`: Checks if a string contains only digits.

\`\`\`javascript
import {
    capitalizeLetter,
    reverseText,
    reverseWords,
    truncateWord,
    containsOnlyDigits
} from "js--utils/string";
\`\`\`

\`\`\`javascript
capitalizeLetter("My name is ahr");

Output: My Name Is Ahr
\`\`\`

\***Explanation:\*** This function capitalizes the first letter of a string and leaves the rest of the string unchanged.

\`\`\`javascript
reverseText("halim");

Output: milah
\`\`\`

\***Explanation:\*** This function reverses the characters in a string.

\`\`\`javascript
reverseWords("Hello World! How are you?");

Output: olleH dlroW! woH era ?uoy
\`\`\`

\***Explanation:\*** This function reverses the words in a string while keeping the order of the characters within each word.

\`\`\`javascript
truncateWord("Lorem ipsum dolor sit amet, consectetur adipiscing elit", 18);

Output: Lorem ipsum dolor...
\`\`\`

\***Explanation:\*** This function truncates a word in a long string if its length exceeds the specified maxLength. It adds ellipsis ("...") to indicate the truncation.

\`\`\`javascript
containsOnlyDigits("123");

Output: true
\`\`\`

\***Explanation:\*** This function checks if a string contains only digits. It returns true if the string consists solely of digits, and false otherwise.

---

#### Date

-   \`differenceInDays(date1, date2)\`: Calculates the difference in days between two dates.
-   \`addAMPM(hour)\`: Adds the AM/PM suffix to an hour.
-   \`extractDateTimeComponents(date)\`: Extracts the year, month, day, hour, minute, second, and millisecond from a date.
-   \`formatDuration(seconds)\`: Formats the duration in seconds to HH:MM:SS format.
-   \`formatDateIso(date)\`: Converts a date to the YYYY-MM-DD format.
-   \`formatDate(date)\`: Converts a date to the Month Date, Year (e.g., 8th Jun, 2023) format.

\`\`\`javascript
import {
    differenceInDays,
    addAMPM,
    extractDateTimeComponents,
    formatDuration, formatDateIso,
    formatDate
} from "js--utils/date";
\`\`\`

\`\`\`javascript
differenceInDays(new Date("2022-01-01"), new Date("2022-01-08"));

Output: 7
\`\`\`

\***Explanation:\*** This function calculates the difference in days between two dates. It takes two Date objects as input and returns the number of days between them.

\`\`\`javascript
addAMPM(18));

Output: 6 PM
\`\`\`

\***Explanation:\*** This function converts a 24-hour format hour to a 12-hour format with AM or PM. It takes an integer representing the hour and returns a string with the hour in 12-hour format followed by "AM" or "PM".

\`\`\`javascript
extractDateTimeComponents(new Date());

Output: { year: 2023, month: 6, day: 18, hour: 10, minute: 30, second: 15 }
\`\`\`

\***Explanation:\*** This function extracts various components (year, month, day, hour, minute, second) from a Date object and returns them as an object.

\`\`\`javascript
formatDuration(3665);

Output: 1:01:05
\`\`\`

\***Explanation:\*** This function formats a duration in seconds into a human-readable format (HH:MM:SS).

\`\`\`javascript
formatDateIso(new Date());

Output: 2023-06-18
\`\`\`

\***Explanation:\*** This function formats a Date object into ISO 8601 format (YYYY-MM-DD).

\`\`\`javascript
formatDate(new Date("2023-02-03"));

Output: 03/02/2023
\`\`\`

\***Explanation:\*** This function formats a Date object into a custom format (DD/MM/YYYY).

---

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
import {
    getAllSiblings,
    isScrollAtTop,
    isScrollAtBottom,
    copyToClipboard,
    getDeviceType,
    isBrowser,
    isNodeJS,
    isElementInFocus,
    isElementVisible
} from "js--utils/dom";
\`\`\`

\`\`\`javascript
getAllSiblings(document.getElementById("myElement"));

Output: [<div class="sibling1"></div>, <div class="sibling2">
\`\`\`

\***Explanation:\*** This function returns an array of all siblings of a given element.

\`\`\`javascript
window.addEventListener("scroll", function () {
    if (isScrollAtTop()) {
        console.log("Scrolled to the top of the page!");
    }
    if (isScrollAtBottom()) {
        console.log("Scrolled to the bottom of the page!");
    }
});

Output: Scrolled to the top of the page
\`\`\`

\***Explanation:\*** This function checks if the user has scrolled to the top of the page. It returns true if the scroll position is at the top, and false otherwise.

\`\`\`javascript
window.addEventListener("scroll", function () {
    if (isScrollAtBottom()) {
        console.log("Scrolled to the bottom of the page!");
    }
});

Output: Scrolled to the bottom of the page!
\`\`\`

\***Explanation:\*** This function checks if the user has scrolled to the bottom of the page. It returns true if the scroll position is at the bottom, and false otherwise.

\`\`\`javascript
document.getElementById("btn").addEventListener("click", () => {
    copyToClipboard("hello buddy");
});

Output: The specified text is copied to the clipboard.
\`\`\`

\***Explanation:\*** This function copies the specified text to the clipboard.

\`\`\`javascript
getDeviceType();

Output: desktop
\`\`\`

\***Explanation:\*** This function returns the type of device based on the user agent string. It can identify whether the device is a desktop, mobile, or tablet.

\`\`\`javascript
isBrowser();

Output: true if the code is running in a browser, false otherwise.
\`\`\`

\***Explanation:\*** This function checks if the code is running in a browser environment. It returns true if the code is executed in a browser, and false otherwise.

\`\`\`javascript
isNodeJS();

Output: true if the code is running in Node.js, false otherwise.
\`\`\`

\***Explanation:\*** This function checks if the code is running in a Node.js environment. It returns true if the code is executed in Node.js, and false otherwise.

\`\`\`javascript
isElementInFocus(document.getElementById("input"));

Output: true if the element is in focus, false otherwise.
\`\`\`

\***Explanation:\*** This function checks if an element is currently in focus. It takes an element as input and returns true if the element is in focus, and false otherwise.

\`\`\`javascript
isElementVisible(document.getElementById("text"));

Output: true if the element is visible, false otherwise.
\`\`\`

\***Explanation:\*** This function checks if an element is visible in the viewport. It takes an element as input and returns true if the element is visible

---

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
    convertToHTMLEntities
} from "js--utils/misc";
\`\`\`

\`\`\`javascript
randomHexColorCode();

Output: #7a2f9b
\`\`\`

\***Explanation:\*** This function generates a random hexadecimal color code.

\`\`\`javascript
getUrlParams("https://www.google.com.hk/search?q=js+md&page=1&perpage=10");

Output: { q: "js md", page: "1", perpage: "10" }
\`\`\`

\***Explanation:\*** An object containing the extracted query parameters.

\`\`\`javascript
generateUUID();

Output: 2d867f37-93a6-4b9b-8dbd-d3ff2d4f9b15
\`\`\`

\***Explanation:\*** This function generates a random UUID (Universally Unique Identifier).

\`\`\`javascript
rgbToHex(205, 143, 89);

Output: #cd8f59
\`\`\`

\***Explanation:\*** This function converts RGB color values to a hexadecimal color code.

\`\`\`javascript
hexToRgb("#cd8f59");

Output: { r: 205, g: 143, b: 89 }
\`\`\`

\***Explanation:\*** This function converts a hexadecimal color code to RGB color values.

\`\`\`javascript
setCookie("username", "Abdul Halim", "Fri, 31 Dec 2023 23:59:59 GMT");
setCookie("email", "ahr@gmail.com", "Fri, 31 Dec 2023 23:59:59 GMT");

Output: A cookie is set with the specified name, value, and expiration date.
\`\`\`

\***Explanation:\*** This function sets a cookie with the specified name, value, and expiration date.

\`\`\`javascript
getCookie("username");

Output: The value of the cookie with the specified name
\`\`\`

\***Explanation:\*** This function retrieves the value of a cookie by its name.

\`\`\`javascript
deleteCookie("username");

Output: The cookie with the specified name is deleted.
\`\`\`

\***Explanation:\*** This function deletes a cookie by its name.

\`\`\`javascript
fahrenheitToCelsius(68);

Output: 20
\`\`\`

\***Explanation:\*** This function converts a temperature value from Fahrenheit to Celsius.

\`\`\`javascript
celsiusToFahrenheit(20);

Output: 68
\`\`\`

\***Explanation:\*** This function converts a temperature value from Celsius to Fahrenheit.

\`\`\`javascript
convertToHTMLEntities('<script>alert("Hello & Welcome");</script>');

Output: &lt;script&gt;alert("Hello &amp; Welcome");&lt;/script&gt;
\`\`\`

\***Explanation:\*** This function converts special characters in a string to HTML entities.

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

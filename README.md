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

```bash
npm install js-utils
```

``or``

```bash
yarn add js-utils
```

### Usage

#### Array

-   `uniqueArray(array)`: Returns a new array with unique elements.
-   `removeFalsyItems(array)`: Removes falsy values from an array.
-   `mergedArray(...arrays)`: Merges multiple arrays into one array with unique elements.
-   `commonElements(...arrays)`: Returns an array of common elements among multiple arrays.
-   `areArraysEqual(...arrays)`: Checks if multiple arrays are equal.
-   `shuffledArray(array)`: Returns a new array with shuffled elements.
-   `flattenedArray(array)`: Flattens a multi-dimensional array into a one-dimensional array.

```javascript
import { uniqueArray, removeFalsyItems, mergedArray, commonElements, areArraysEqual, shuffledArray, flattenedArray } from "js--utils/array";
```

```javascript
uniqueArray([2, 6, 6, 3, 2, 8]);

Output: [2, 6, 3, 8]

Explanation: The uniqueArray function takes an array as input and returns a new array that contains only the unique elements from the input array. In this case, the input array is [2, 6, 6, 3, 2, 8], and the output is [2, 6, 3, 8], as it removes the duplicate elements and only keeps the unique ones.
```

```javascript
removeFalsyItems([0, 1, false, true, "", "hello", null, undefined, NaN]);

Output: [1, true, "hello"]

Explanation: The removeFalsyItems function removes all falsy values from the array. In the given input array, the falsy values are 0, false, "", null, undefined, and NaN. The output array contains only the truthy values [1, true, "hello"].
```

```javascript
mergedArray([1, 2, 3], [2, 3, 4], [5, 4]);

Output: [1, 2, 3, 4, 5]

Explanation: The mergedArray function merges multiple arrays into a single array. In this case, the input arrays are [1, 2, 3], [2, 3, 4], and [5, 4]. The output array contains all unique elements from the input arrays, resulting in [1, 2, 3, 4, 5].
```

```javascript
commonElements([1, 2, 3], [2, 3, 4], [4, 5, 3]);

Output: [3]

Explanation: The commonElements function returns an array containing the common elements among the input arrays. In this case, the common element between [1, 2, 3], [2, 3, 4], and [4, 5, 3] is 3, so the output is [3].
```

```javascript
areArraysEqual([1, 2, 3], [1, 2, 3], [1, 2, 3]);

Output: true

Explanation: The areArraysEqual function checks if multiple arrays are equal. In this case, all the input arrays [1, 2, 3] are the same, so the output is true.
```

```javascript
shuffledArray([5, 3, 2, 15, 6]);

Output: A randomly shuffled array, e.g., [6, 2, 3, 5, 15]

Explanation: The shuffledArray function shuffles the elements of the input array randomly. The output will be a new array with the elements rearranged in a random order.
```

```javascript
flattenedArray([[1, 2, [3]], 4, [5, [6, 7, [36, 45, [9]]]]]);
Output: [1, 2, 3, 4, 5, 6, 7, 36, 45, 9]
Explanation: The flattenedArray function converts a nested array into a single-level array. The output is obtained by flattening the nested array [[1, 2, [3]], 4, [5, [6, 7, [36, 45, [9]]]]], resulting in [1, 2, 3, 4, 5, 6, 7, 36, 45, 9].
```

#### Object

-   `isObjectEmpty(object)`: Checks if an object is empty.
-   `removeFalsyValues(object)`: Removes falsy values from an object.
-   `getAllCookiesAsObject()`: Returns all cookies as an object.
-   `getAllLocalStorageItems()`: Returns all items from the local storage as an object.

```javascript
import {
    isObjectEmpty,
    removeFalsyValues,
    getAllCookiesAsObject,
    getAllLocalStorageItems
} from "js--utils/object";

console.log(isObjectEmpty({}));

console.log(removeFalsyValues({ prop1: "value1", prop2: null, prop3: "", prop4: { x: 0, y: 3 }, prop5: "value5" }));

setCookie("username", "Abdul Halim", "Fri, 31 Dec 2023 23:59:59 GMT");
setCookie("email", "ahr@gmail.com", "Fri, 31 Dec 2023 23:59:59 GMT");

console.log(getAllCookiesAsObject());

localStorage.setItem("test", "123");
console.log(getAllLocalStorageItems());
```

#### Number

-   `getRandomNumber(min, max)`: Generates a random integer within the given range.
-   `convertToBanglaDigit(number)`: Converts English digits to Bangla digits.
-   `isNegative(number)`: Checks if a number is negative.

```javascript
import { getRandomNumber, convertToBanglaDigit, isNegative } from "js--utils/number";

console.log(getRandomNumber(1, 100));

console.log(convertToBanglaDigit(462));

console.log(isNegative(-1));
```

#### String

-   `capitalizeLetter(string)`: Capitalizes the first letter of a string.
-   `reverseText(string)`: Reverses the characters in a string.
-   `reverseWords(string)`: Reverses the words in a string.
-   `truncateWord(string, maxLength)`: Truncates a word in a long string.
-   `containsOnlyDigits(string)`: Checks if a string contains only digits.

```javascript
import { capitalizeLetter, reverseText, reverseWords, truncateWord, containsOnlyDigits } from "js--utils/string";

console.log(capitalizeLetter("My name is rony"));

console.log(reverseText("halim"));

console.log(reverseWords("Hello World! How are you?"));

console.log(truncateWord("Lorem ipsum dolor sit amet, consectetur adipiscing elit", 18));

console.log(containsOnlyDigits("123"));
```

#### Date

-   `differenceInDays(date1, date2)`: Calculates the difference in days between two dates.
-   `addAMPM(hour)`: Adds the AM/PM suffix to an hour.
-   `extractDateTimeComponents(date)`: Extracts the year, month, day, hour, minute, second, and millisecond from a date.
-   `formatDuration(seconds)`: Formats the duration in seconds to HH:MM:SS format.
-   `formatDateIso(date)`: Converts a date to the YYYY-MM-DD format.
-   `formatDate(date)`: Converts a date to the Month Date, Year (e.g., 8th Jun, 2023) format.

```javascript
import { differenceInDays, addAMPM, extractDateTimeComponents, formatDuration, formatDateIso, formatDate } from "js--utils/date";

console.log(differenceInDays(new Date("2022-01-01"), new Date("2022-01-08")));

console.log(addAMPM(18));

console.log(extractDateTimeComponents(new Date()));

console.log(formatDuration(3665));

console.log(formatDateIso(new Date()));

console.log(formatDate(new Date("2023-02-03")));
```

#### DOM

-   `getAllSiblings(element)`: Returns an array of all siblings of an element.
-   `isScrollAtTop()`: Checks if the user has scrolled to the top of the page.
-   `isScrollAtBottom()`: Checks if the user has scrolled to the bottom of the page.
-   `copyToClipboard(text)`: Copies the specified text to the clipboard.
-   `getDeviceType()`: Returns the type of device (desktop, mobile, tablet).
-   `isBrowser()`: Checks if the code is running in a browser environment.
-   `isNodeJS()`: Checks if the code is running in Node.js environment.
-   `isElementInFocus(element)`: Checks if an element is currently in focus.
-   `isElementVisible(element)`: Checks if an element is visible in the viewport.

```javascript
import { getAllSiblings, isScrollAtTop, isScrollAtBottom, copyToClipboard, getDeviceType, isBrowser, isNodeJS, isElementInFocus, isElementVisible } from "js--utils/dom";

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
```

#### Miscellaneous

-   `randomHexColorCode()`: Generates a random hexadecimal color code.
-   `getUrlParams(url)`: Extracts query parameters from a URL.
-   `generateUUID()`: Generates a random UUID.
-   `rgbToHex(r, g, b)`: Converts RGB color values to a hexadecimal color code.
-   `hexToRgb(hex)`: Converts a hexadecimal color code to RGB color values.
-   `setCookie(name, value, expires)`: Sets a cookie with the specified name, value, and expiration date.
-   `getCookie(name)`: Retrieves the value of a cookie by its name.
-   `deleteCookie(name)`: Deletes a cookie by its name.
-   `fahrenheitToCelsius(fahrenheit)`: Converts a temperature value from Fahrenheit to Celsius.
-   `celsiusToFahrenheit(celsius)`: Converts a temperature value from Celsius to Fahrenheit.
-   `convertToHTMLEntities(text)`: Converts special characters to HTML entities.

```javascript
import { randomHexColorCode, getUrlParams, generateUUID, rgbToHex, hexToRgb, setCookie, getCookie, deleteCookie, fahrenheitToCelsius, celsiusToFahrenheit, convertToHTMLEntities } from "js--utils/misc";

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
```

---

This repository also includes example usage of these utility functions. Feel free to explore and experiment with them.

If you have any questions or suggestions, please open an issue or submit a pull request.

Happy coding!
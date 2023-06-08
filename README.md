## Some Useful JavaScript Utility Functions

This repository contains various utility functions for JavaScript programming. The functions are categorized into different modules based on their functionality.

### Table of Contents

- [Some Useful JavaScript Utility Functions](#some-useful-javascript-utility-functions)
  - [Table of Contents](#table-of-contents)
    - [Array](#array)
  - [Object](#object)
  - [Number](#number)
  - [String](#string)
  - [Date](#date)
  - [DOM](#dom)
  - [Miscellaneous](#miscellaneous)

#### Array

-   `uniqueArray(array)`: Returns a new array with unique elements.
-   `removeFalsyItems(array)`: Removes falsy values from an array.
-   `mergedArray(...arrays)`: Merges multiple arrays into one array with unique elements.
-   `commonElements(...arrays)`: Returns an array of common elements among multiple arrays.
-   `areArraysEqual(...arrays)`: Checks if multiple arrays are equal.
-   `shuffledArray(array)`: Returns a new array with shuffled elements.
-   `flattenedArray(array)`: Flattens a multi-dimensional array into a one-dimensional array.

### Object

-   `isObjectEmpty(object)`: Checks if an object is empty.
-   `removeFalsyValues(object)`: Removes falsy values from an object.
-   `getAllCookiesAsObject()`: Returns all cookies as an object.
-   `getAllLocalStorageItems()`: Returns all items from the local storage as an object.

### Number

-   `getRandomNumber(min, max)`: Generates a random integer within the given range.
-   `convertToBanglaDigit(number)`: Converts English digits to Bangla digits.
-   `isNegative(number)`: Checks if a number is negative.

### String

-   `capitalizeLetter(string)`: Capitalizes the first letter of a string.
-   `reverseText(string)`: Reverses the characters in a string.
-   `reverseWords(string)`: Reverses the words in a string.
-   `truncateWord(string, maxLength)`: Truncates a word in a long string.
-   `containsOnlyDigits(string)`: Checks if a string contains only digits.

### Date

-   `differenceInDays(date1, date2)`: Calculates the difference in days between two dates.
-   `addAMPM(hour)`: Adds the AM/PM suffix to an hour.
-   `extractDateTimeComponents(date)`: Extracts the year, month, day, hour, minute, second, and millisecond from a date.
-   `formatDuration(seconds)`: Formats the duration in seconds to HH:MM:SS format.
-   `formatDateIso(date)`: Converts a date to the YYYY-MM-DD format.
-   `formatDate(date)`: Converts a date to the Month Date, Year (e.g., 8th Jun, 2023) format.

### DOM

-   `getAllSiblings(element)`: Returns an array of all siblings of an element.
-   `isScrollAtTop()`: Checks if the user has scrolled to the top of the page.
-   `isScrollAtBottom()`: Checks if the user has scrolled to the bottom of the page.
-   `copyToClipboard(text)`: Copies the specified text to the clipboard.
-   `getDeviceType()`: Returns the type of device (desktop, mobile, tablet).
-   `isBrowser()`: Checks if the code is running in a browser environment.
-   `isNodeJS()`: Checks if the code is running in Node.js environment.
-   `isElementInFocus(element)`: Checks if an element is currently in focus.
-   `isElementVisible(element)`: Checks if an element is visible in the viewport.

### Miscellaneous

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

---

This repository also includes example usage of these utility functions. Feel free to explore and experiment with them.

If you have any questions or suggestions, please open an issue or submit a pull request.

Happy coding!

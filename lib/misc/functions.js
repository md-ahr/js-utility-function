export const randomHexColorCode = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;

export const rgbToHex = (r, g, b) =>
  `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

export const hexToRgb = (hex) => {
  hex = hex.replace("#", "");
  return `rgb(${(parseInt(hex, 16) >> 16) & 255}, ${
    (parseInt(hex, 16) >> 8) & 255
  }, ${parseInt(hex, 16) & 255})`;
};

export const getUrlParams = (url) =>
  JSON.parse(
    `{"${decodeURI(url.split("?")[1])
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')}"}`
  );

export const generateUUID = () => {
  const stringFormat = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  return stringFormat.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const setCookie = (key, value, expires) => {
  document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(
    JSON.stringify(value)
  )}; expires=${expires}`;
};

export const getCookie = (key) => {
  const encodedKey = encodeURIComponent(key);
  const cookieArray = document.cookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].trim();
    if (cookie.startsWith(encodedKey + "=")) {
      return JSON.parse(
        decodeURIComponent(cookie.substring(encodedKey.length + 1))
      );
    }
  }
  return null;
};

export const deleteCookie = (name) =>
  (document.cookie = `${encodeURIComponent(
    name
  )}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`);

export const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

export const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

export const convertToHTMLEntities = (text) => {
  const tempElement = document.createElement("div");
  tempElement.textContent = text;
  return tempElement.innerHTML;
};

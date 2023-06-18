export const isObjectEmpty = (obj) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export const removeFalsyValues = (obj) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value && typeof value === "object") {
      const cleanedValue = removeFalsyValues(value);
      if (Object.keys(cleanedValue).length !== 0) {
        acc[key] = cleanedValue;
      }
    } else if (value) {
      acc[key] = value;
    }
    return acc;
  }, {});
};

export const getAllCookiesAsObject = () => {
  const cookieObj = {};
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].trim().split("=");
    cookieObj[key] = decodeURIComponent(value);
  }
  return cookieObj;
};

export const getAllLocalStorageItems = () => {
  const localStorageObj = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    localStorageObj[key] = value;
  }
  return localStorageObj;
};

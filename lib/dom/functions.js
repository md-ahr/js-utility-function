export const getAllSiblings = (element) =>
  Array.from(element.parentNode.childNodes).filter(
    (node) => node.nodeType === 1 && node !== element
  );

export const isScrollAtTop = () =>
  (window.pageYOffset || document.documentElement.scrollTop) === 0;

export const isScrollAtBottom = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  const clientHeight = document.documentElement.clientHeight;
  return scrollTop + clientHeight >= scrollHeight;
};

export const copyToClipboard = (text) => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  return "Text copied to clipboard";
};

export const getDeviceType = () => {
  const isTablet = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(
    navigator.userAgent
  );
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  if (isTablet) return "tablet";
  if (isMobile) return "mobile";
  return "desktop";
};

export const isBrowser = () => typeof window !== "undefined";

export const isNodeJS = () =>
  typeof process !== "undefined" &&
  process.release &&
  process.release.name === "node";

export const isElementInFocus = (element) => element === document.activeElement;

export const isElementVisible = (element) => {
  return Boolean(
    element.offsetWidth ||
      element.offsetHeight ||
      element.getClientRects().length
  );
};

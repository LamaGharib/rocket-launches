export const creatEl = (tag, classN) => {
  const element = document.createElement(tag);
  element.className = classN;
  return element;
};

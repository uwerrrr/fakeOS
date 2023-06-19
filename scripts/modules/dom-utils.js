const eleArr = [];

// function add DOM element & push to eleArr
const addDOMid = (id) => {
  const element = document.querySelector(`#${id}`);
  eleArr.push(element);
  return element;
};

////////////////////////////////////
/// captured elements
///
export const appleLogo = addDOMid("appleLogoDiv");

export const macMenu = addDOMid("macMenuWrapper");

/////////////
/// Notes

export const notesIcon = addDOMid("notesIcon");
export const notesWindow = addDOMid("notesWindow");
export const notesCloseBtn = addDOMid("notesCloseBtn");

/////////////
/// player
export const playerIcon = addDOMid("playerIcon");
export const playerWindow = addDOMid("playerWindow");
export const playerCloseBtn = addDOMid("playerCloseBtn");

/////////////
/// Calendar

export const calendarIcon = addDOMid("calendarIcon");
export const calendarWindow = addDOMid("calendarWindow");
export const calendarCloseBtn = addDOMid("calendarCloseBtn");

////////////////////////////////////
/// log
///
const domElementLog = (element) => {
  console.log(`${element.id}: `, element);
};

export const logAllEle = () => {
  eleArr.forEach((element) => domElementLog(element));
};

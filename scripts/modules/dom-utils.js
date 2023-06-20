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

export const windows = document.querySelectorAll(".window");
eleArr.push(windows);

/////////////
/// menu
export const appleLogo = addDOMid("appleLogoDiv");
export const macMenu = addDOMid("macMenuWrapper");

/////////////
/// Notes

export const notesIcon = addDOMid("notesIcon");
export const notesWindow = addDOMid("notesWindow");
export const notesCloseBtn = addDOMid("notesCloseBtn");

/////////////
/// Player
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
  if (element.id) {
    console.log(`${element.id}: `, element);
  } else {
    console.log(element);
  }
};

export const logAllEle = () => {
  // console.log("eleArr: ", eleArr);
  eleArr.forEach((element) => domElementLog(element));
};

const eleArr = [];

// function add DOM element & push to eleArr
const addDOMid = (id) => {
  const element = document.querySelector(`#${id}`);
  eleArr.push(element);
  return element;
};

const addDOMClass = (classCSS) => {
  const element = document.querySelectorAll(`.${classCSS}`);
  eleArr.push(element);
  return element;
};

////////////////////////////////////
/// captured elements
///

export const windows = addDOMClass("window");

/////////////
/// menu
export const appleLogo = addDOMid("appleLogoDiv");
export const macMenu = addDOMid("macMenuWrapper");

/////////////
/// Notes

export const notesIcon = addDOMid("notesIcon");
export const notesWindow = addDOMid("notesWindow");
export const notesCloseBtn = addDOMid("notesCloseBtn");
export const notesForm = addDOMid("notesForm");
export const noteTitle = addDOMid("noteTitle");
export const noteContent = addDOMid("noteContent");

export const notesSave = addDOMid("notesSave");
export const notesClear = addDOMid("notesSave");
export const savedNotesDiv = addDOMid("savedNotesDiv");

/////////////
/// Player
export const playerIcon = addDOMid("playerIcon");
export const playerWindow = addDOMid("playerWindow");
export const playerCloseBtn = addDOMid("playerCloseBtn");
export const playerVideo = addDOMid("playerVideo");

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

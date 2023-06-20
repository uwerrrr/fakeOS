const eleArr = [];

// function add DOM element & push to eleArr
export const addDOM = (identifier) => {
  // JS doesn't allow to pass only selected parameter
  // work around -> need to use Object as parameter

  let element;
  if (identifier.id) {
    element = document.querySelector(`#${identifier.id}`);
  } else if (identifier.classCSS) {
    element = document.querySelectorAll(`.${identifier.classCSS}`);
  } else if (identifier.name) {
    element = document.getElementsByName(identifier.name);
  }
  eleArr.push(element);
  return element;
};

// const addDOMClass = (classCSS) => {
//   const element = document.querySelectorAll(`.${classCSS}`);
//   eleArr.push(element);
//   return element;
// };

////////////////////////////////////
/// captured elements
///

export const windows = addDOM({ classCSS: "window" });

/////////////
/// menu
export const appleLogo = addDOM({ id: "appleLogoDiv" });
export const macMenu = addDOM({ id: "macMenuWrapper" });

/////////////
/// Notes

export const notesIcon = addDOM({ id: "notesIcon" });
export const notesWindow = addDOM({ id: "notesWindow" });
export const notesCloseBtn = addDOM({ id: "notesCloseBtn" });
export const notesForm = addDOM({ id: "notesForm" });
export const noteTitle = addDOM({ id: "noteTitle" });
export const noteContent = addDOM({ id: "noteContent" });

export const notesSave = addDOM({ id: "notesSave" });
export const notesClear = addDOM({ id: "notesClear" });

export const savedNotesDiv = addDOM({ id: "savedNotesDiv" });

export let savedNotes = addDOM({ name: "savedNote" });

// function get the updated saved notes elements
export const updateSavedNotesEle = () => {
  savedNotes = addDOM({ name: "savedNote" });
};

/////////////
/// Player
export const playerIcon = addDOM({ id: "playerIcon" });
export const playerWindow = addDOM({ id: "playerWindow" });
export const playerCloseBtn = addDOM({ id: "playerCloseBtn" });
export const playerVideo = addDOM({ id: "playerVideo" });

/////////////
/// Calendar

export const calendarIcon = addDOM({ id: "calendarIcon" });
export const calendarWindow = addDOM({ id: "calendarWindow" });
export const calendarCloseBtn = addDOM({ id: "calendarCloseBtn" });

/////////////
/// Trash

export const trashIcon = addDOM({ id: "trashIcon" });
export const trashWindow = addDOM({ id: "trashWindow" });
export const trashCloseBtn = addDOM({ id: "trashCloseBtn" });

////////////////////////////////////
/// log
///
const domElementLog = (element) => {
  if (element.id) {
    console.log(`${element.id}: `, element);
  } else if (element.name) {
    console.log(`${element.name}: `, element);
  } else {
    console.log(element);
  }
};

export const logAllEle = () => {
  // console.log("eleArr: ", eleArr);
  eleArr.forEach((element) => domElementLog(element));
};

import * as dom from "./modules/dom-utils.js";
import * as nf from "./modules/notesFunction.js";
import * as test from "./modules/test.js";
import * as gf from "./modules/generalFunctions.js";
import * as cf from "./modules/calendarFunctions.js";

dom.logAllEle(); // log all initially captured HTML elements

/////////////////////////////////////////
/* LIVE TIME */

// Function to get current time & display
function currentTime() {
  // Get the current date and time
  const now = new Date();

  // Get the current hour and pad it with leading zeros if necessary
  const hours = String(now.getHours()).padStart(2, "0");

  // Get the current minute and pad it with leading zeros if necessary
  const minutes = String(now.getMinutes()).padStart(2, "0");

  // Get the current second and pad it with leading zeros if necessary
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Format the time as a string in the "HH:MM:SS" format
  const time = `${hours}:${minutes}:${seconds}`;

  // Update the text content of the element with the id "clock" to display the current time
  dom.clock.textContent = time;
}

// Call the currentTime function every 1000 milliseconds (1 second)
setInterval(currentTime, 1000);

////////////////////////////////////////////
/// mac menu
///
dom.appleLogo.addEventListener("click", (event) => {
  test.clickedLog(event); // log what is clicked

  dom.macMenu.classList.toggle("hidden-wrapper--show");
});

///////////////
/// About This Mac
dom.menuAbout.addEventListener("click", (event) => {
  test.clickedLog(event); // log what is clicked

  dom.aboutWindow.classList.add("hidden-wrapper--show");
  dom.macMenu.classList.remove("hidden-wrapper--show");
});

dom.aboutCloseBtn.addEventListener("click", (event) => {
  test.clickedLog(event); // log what is clicked

  dom.aboutWindow.classList.remove("hidden-wrapper--show");
});

/////////////////////////////////////////////////////////
/// Apps
///
const hideAllWindows = () => {
  for (let i = 0; i < dom.windows.length; i++) {
    const window = dom.windows[i];
    if (window.classList.contains("hidden-wrapper--show")) {
      window.classList.remove("hidden-wrapper--show");
    }
  }
  dom.playerVideo.pause(); // pause bunny video when window hidden
};

///////////////////////
/// Notes app
///

const savedNotesArr = [];

///////// Read Me note
nf.saveNewNote(
  "Read Me",
  `Hello world, this is a dummy note from Oscar! \n
  Welcome to my Macintosh web replica! \n
  You can create new note and retrieve saved note content. \n
  Go on! Create as many notes as you want! \n
  \n
  \n
  Delete is out of scope... :)`,
  savedNotesArr
);

///////
// open & close
dom.notesIcon.addEventListener("dblclick", (event) => {
  test.clickedLog(event); // log what is clicked
  hideAllWindows();
  dom.notesWindow.classList.add("hidden-wrapper--show");

  nf.displaySavedNotes(savedNotesArr);
  nf.saveNotesClickListen(savedNotesArr);
});
dom.notesCloseBtn.addEventListener("click", (event) => {
  test.clickedLog(event); // log what is clicked
  dom.notesWindow.classList.remove("hidden-wrapper--show");

  dom.notesForm.reset();
});

///////////////

// Save btn clicked
dom.notesSave.addEventListener("click", (event) => {
  test.clickedLog(event); // log what is clicked

  // empty entries -> report & exit
  if (!dom.notesForm.checkValidity()) {
    dom.notesForm.reportValidity();
    return;
  }

  // prevent page from reload
  event.preventDefault();

  const notesFormData = new FormData(dom.notesForm, dom.notesSave); // get new data every click
  const noteTitle = notesFormData.get("noteTitle"); // name of <input>
  const noteContent = notesFormData.get("noteContent"); // name of <input>

  console.log("noteTitle saved: ", noteTitle);
  console.log("noteContent saved: ", noteContent);

  nf.saveNewNote(noteTitle, noteContent, savedNotesArr);

  nf.displaySavedNotes(savedNotesArr);
  nf.saveNotesClickListen(savedNotesArr);

  dom.notesForm.reset(); // clear inputs
});

///////////////////////
/// Player app
///
dom.playerIcon.addEventListener("dblclick", (event) => {
  test.clickedLog(event); // log what is clicked
  hideAllWindows();
  dom.playerWindow.classList.add("hidden-wrapper--show");
});

dom.playerCloseBtn.addEventListener("click", (event) => {
  test.clickedLog(event); // log what is clicked

  dom.playerVideo.pause(); // pause video when close
  dom.playerWindow.classList.remove("hidden-wrapper--show");
});

///////////////////////
/// Calendar app
///

const today = new Date();
let currentYear;
let currentMonth;

const setToday = () => {
  currentYear = today.getFullYear();
  currentMonth = today.getMonth();
};
setToday();
cf.generateCalendar(currentMonth, currentYear, dom.calendarElement);

dom.calendarIcon.addEventListener("dblclick", (event) => {
  test.clickedLog(event); // log what is clicked
  hideAllWindows();
  dom.calendarWindow.classList.add("hidden-wrapper--show");

  setToday();
  cf.generateCalendar(currentMonth, currentYear, dom.calendarElement);
});

dom.calendarCloseBtn.addEventListener("click", (event) => {
  test.clickedLog(event); // log what is clicked
  dom.calendarWindow.classList.remove("hidden-wrapper--show");
});

dom.calendarNext.addEventListener("click", (event) => {
  test.clickedLog(event); // log what is clicked

  ++currentMonth;
  if (currentMonth > 11) {
    currentMonth = 0;
    ++currentYear;
  }

  cf.generateCalendar(currentMonth, currentYear, dom.calendarElement);
});

dom.calendarPrev.addEventListener("click", (event) => {
  test.clickedLog(event); // log what is clicked

  --currentMonth;
  if (currentMonth < 0) {
    currentMonth = 11;
    --currentYear;
  }

  cf.generateCalendar(currentMonth, currentYear, dom.calendarElement);
});

dom.calendarToday.addEventListener("click", (event) => {
  test.clickedLog(event); // log what is clicked

  setToday();
  cf.generateCalendar(currentMonth, currentYear, dom.calendarElement);
});

///////////////////////
/// Trash app
///
dom.trashIcon.addEventListener("dblclick", (event) => {
  test.clickedLog(event); // log what is clicked
  hideAllWindows();
  dom.trashWindow.classList.add("hidden-wrapper--show");
});

dom.trashCloseBtn.addEventListener("click", (event) => {
  test.clickedLog(event); // log what is clicked
  dom.trashWindow.classList.remove("hidden-wrapper--show");
});

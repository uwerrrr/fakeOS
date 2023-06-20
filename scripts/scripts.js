import * as dom from "./modules/dom-utils.js";

dom.logAllEle(); // log all captured HTML elements

//////////////////////////////////////
/// Tests
///
const domElementLog = (element) => {
  console.log(`${element.id}: `, element);
};

const clickedLog = (event) => {
  const id = event.target.id; // get id of event being clicked
  console.log(`${id} is clicked`);
};

/////////////////////////////////////////
/* LIVE TIME */

// Function to update the current time
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
  document.getElementById("clock").textContent = time;
}

// Call the currentTime function every 1000 milliseconds (1 second)
setInterval(currentTime, 1000);

////////////////////////////////////////////
/// mac menu
///
dom.appleLogo.addEventListener("click", (event) => {
  clickedLog(event); // log what is clicked

  dom.macMenu.classList.toggle("hidden-wrapper--show");
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

///////
// open & close
dom.notesIcon.addEventListener("dblclick", (event) => {
  clickedLog(event); // log what is clicked
  hideAllWindows();
  dom.notesWindow.classList.add("hidden-wrapper--show");
  saveNotesClickListen();
});
dom.notesCloseBtn.addEventListener("click", (event) => {
  clickedLog(event); // log what is clicked
  dom.notesWindow.classList.remove("hidden-wrapper--show");

  dom.notesForm.reset();
});

///////
// Notes processes

// a function create text element -> add text to text element -> add CSS classes to text element -> add it to parent element
const createTextEl = (
  elType,
  textVal,
  parent,
  classes = [],
  id = "",
  name = ""
) => {
  const newEl = document.createElement(elType); // create Element
  classes.forEach((c) => newEl.classList.add(c)); // add classes to Element
  id ? (newEl.id = id) : id; // add id when there's id
  name ? newEl.setAttribute("name", name) : name; // add name when there's id
  const text = document.createTextNode(textVal); // convert textVal to text node
  newEl.appendChild(text); // add text node to Element
  parent.appendChild(newEl); // assign Element to parent
};

// predefined saved notes Arr of Obj
function SavedNoteObj(noteID, noteTitle, noteContent) {
  this.noteID = noteID;
  this.noteTitle = noteTitle;
  this.noteContent = noteContent;
}

// function save new note
const saveNewNote = (noteTitle, noteContent) => {
  const noteID = `savedNote${savedNotesArr.length}`;
  const noteObj = new SavedNoteObj(noteID, noteTitle, noteContent);
  savedNotesArr.push(noteObj);
};

// function add event listener click to each save note
// savedNotes is a node list -> can use forEach()
const saveNotesClickListen = () => {
  dom.savedNotes.forEach((savedNote) => {
    savedNote.addEventListener("click", (event) => {
      clickedLog(event);

      const noteIDToFind = event.target.id;
      // console.log("event: ", event);

      // find the note Obj in savedNotesArr that match the clicked noteID
      const savedNoteFound = savedNotesArr.reduce((acc, savedNote) => {
        if (savedNote.noteID === noteIDToFind) {
          acc = { ...savedNote };
        }
        return acc;
      }, {}); // return Obj

      // console.log("savedNoteFound: ", savedNoteFound);

      const { noteTitle, noteContent } = savedNoteFound;
      // console.log("noteTitle: ", noteTitle);

      dom.noteTitle.value = noteTitle;
      dom.noteContent.value = noteContent;
    });
  });
};

// function display all saved notes
const displaySavedNotes = () => {
  dom.savedNotesDiv.innerHTML = ""; // clear all displayed saved notes

  // display all contents of savedNotesArr
  savedNotesArr.forEach((savedNote, index) => {
    const { noteID, noteTitle, noteContent } = savedNote;
    createTextEl(
      "h4",
      noteTitle,
      dom.savedNotesDiv,
      ["notes__saved-note"],
      noteID,
      "savedNote"
    );
  });

  dom.updateSavedNotesEle(); // update saved note ele list when new notes are displayed
};

///////// sample note
saveNewNote(
  "Sample note",
  `Hello world, this is a dummy note from Oscar! Welcome to my Macintosh web replica. \n
  You can create new note and retrieve saved note content. \n
  Go on! Create as many notes as you want! \n
  \n
  Delete is out of scope... :)`
);
displaySavedNotes();
saveNotesClickListen();

console.log("savedNotesArr: ", savedNotesArr);
console.log("savedNotesArr[0]: ", savedNotesArr[0]);
console.log("savedNotesArr[0].noteTitle: ", savedNotesArr[0].noteTitle);

///////////////

// Save btn clicked
dom.notesSave.addEventListener("click", (event) => {
  clickedLog(event); // log what is clicked

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

  console.log("noteTitle: ", noteTitle);
  console.log("noteContent: ", noteContent);

  saveNewNote(noteTitle, noteContent);

  displaySavedNotes();
  saveNotesClickListen();
  dom.notesForm.reset(); // clear inputs
});

///////////////////////
/// Player app
///
dom.playerIcon.addEventListener("dblclick", (event) => {
  clickedLog(event); // log what is clicked
  hideAllWindows();
  dom.playerWindow.classList.add("hidden-wrapper--show");
});

dom.playerCloseBtn.addEventListener("click", (event) => {
  clickedLog(event); // log what is clicked

  dom.playerVideo.pause(); // pause video when close
  dom.playerWindow.classList.remove("hidden-wrapper--show");
});

///////////////////////
/// Calendar app
///
dom.calendarIcon.addEventListener("dblclick", (event) => {
  clickedLog(event); // log what is clicked
  hideAllWindows();
  dom.calendarWindow.classList.add("hidden-wrapper--show");
});

dom.calendarCloseBtn.addEventListener("click", (event) => {
  clickedLog(event); // log what is clicked
  dom.calendarWindow.classList.remove("hidden-wrapper--show");
});


///////////////////////
/// Trash app
///
dom.trashIcon.addEventListener("dblclick", (event) => {
  clickedLog(event); // log what is clicked
  hideAllWindows();
  dom.trashWindow.classList.add("hidden-wrapper--show");
});

dom.trashCloseBtn.addEventListener("click", (event) => {
  clickedLog(event); // log what is clicked
  dom.trashWindow.classList.remove("hidden-wrapper--show");
});

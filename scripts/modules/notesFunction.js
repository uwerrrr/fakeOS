import * as dom from "./dom-utils.js";
import * as test from "./test.js";
import * as gf from "./generalFunctions.js";


///////
// Notes functions


// predefined saved notes Arr of Obj
export function SavedNoteObj(noteID, noteTitle, noteContent) {
  this.noteID = noteID;
  this.noteTitle = noteTitle;
  this.noteContent = noteContent;
}

// function save new note
export const saveNewNote = (noteTitle, noteContent, savedNotesArr) => {
  const noteID = `savedNote${savedNotesArr.length}`;
  const noteObj = new SavedNoteObj(noteID, noteTitle, noteContent);
  savedNotesArr.push(noteObj);
};

// function add event listener click to each save note
// savedNotes is a node list -> can use forEach()
export const saveNotesClickListen = (savedNotesArr) => {
  dom.savedNotes.forEach((savedNote) => {
    savedNote.addEventListener("click", (event) => {
      test.clickedLog(event);

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
export const displaySavedNotes = (savedNotesArr) => {
  dom.savedNotesDiv.innerHTML = ""; // clear all displayed saved notes

  // display all contents of savedNotesArr
  savedNotesArr.forEach((savedNote, index) => {
    const { noteID, noteTitle, noteContent } = savedNote;
    gf.createTextEl(
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

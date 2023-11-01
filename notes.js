const fs = require("fs");
const chalk = require("chalk");
const { time } = require("console");
const { title } = require("process");
const getNotes =  () => {
  return "Youre notes...";
};

//   for addNotes
const addNotes =  (title, body) => {
  const notes = loadNotes();
  const duplicateNote=notes.find((note) => note.title === title);
  debugger
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New Notes added");
  } else {
    console.log("Note title taken");
  }
};

// for removeNotes

const removeNotes = (title) => {
  const notes = loadNotes();

  const notesKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesKeep.length) {
    console.log(chalk.green.inverse("Note Removed"));
    saveNotes(notesKeep);
  } else {
    console.log(chalk.red.inverse("Not note Found"));
  }
};

// for lists notes
 const listsNotes = () =>{
  const notes = loadNotes();
  console.log(chalk.inverse("your notes"));

  notes.forEach(element => console.log(element.title));
 }


// for reading notes

const readNotes = (title) =>{
  const notes = loadNotes();
  const noteRead = notes.find((no) => no.title === title);
  if(noteRead){
    console.log(chalk.green.inverse(noteRead.title))
  }else{
    console.log(chalk.red.inverse("Not found note"))
  }

}

const saveNotes =  (notes)  =>{
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes =  () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listsNotes:listsNotes,
  readNotes:readNotes
};

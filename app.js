const notes = require("./notes");
const yargs = require("yargs");
// const validator = require('validator');

// customize yargs
yargs.version("1.0.0.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add A  Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove A  Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
   
  },
  handler(argv) {
     notes.removeNotes(argv.title);
  },
});

// create read command
yargs.command({
  command: "read",
  describe: "Read A  Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
   
  },
  handler(argv) {
     notes.readNotes(argv.title)
  },
});

// create lists command
yargs.command({
  command: "lists",
  describe: "Lists A  Note",
  handler() {
     notes.listsNotes();
  },
  
})
yargs.parse();


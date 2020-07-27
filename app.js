const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');


// console.log(yargs.version);

yargs.version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'Add a new note..',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true, // if title must be provided
      type: 'string' // to hanndle empty value, otherwise value stored in title will be true
    },
    body: {
      description: 'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => notes.addNote(argv.title, argv.body)

})

// console.log(yargs.argv)

yargs.command({
  command: 'remove',
  describe: 'Remove a note..',
  builder: {
    title: {
      describe: 'note title to be deleted',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => notes.removeNote(argv.title)
});


yargs.command({
  command: 'list',
  describe: 'List note..',
  handler: () => notes.listNotes()
})


yargs.command({
  command: 'read',
  describe: 'Read thea note..',
  builder: {
    title: {
      describe: 'note title to be read',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => notes.readNote(argv.title)
})









yargs.parse()

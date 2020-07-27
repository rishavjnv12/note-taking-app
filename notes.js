const fs = require('fs')
const chalk = require('chalk')

const getNotes = ()=> {
  return 'Your notes';
}

const addNote = (title, body) =>{
  const notes = loadNotes()
  // const duplicateNotes = notes.filter((note) => note.title === title)
  const duplicateNote = notes.find((note) => note.title === title)

  debugger

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)

    console.log(chalk.green.inverse('New notes added'))
  } else {
    console.log(chalk.red.inverse('Note title taken'))
  }


}
const removeNote = function(title) {
  const notes = loadNotes()
  const finalNote = notes.filter((note) => note.title !== title)
  if (finalNote.length === notes.length) {
    console.log(chalk.red.inverse('Not found'))
  } else {
    console.log(chalk.green.inverse('Notes removed'))
    saveNotes(finalNote)
  }
}

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const listNotes=()=>{
  console.log(chalk.blue.inverse('Your Notes:-'))
  const notes=loadNotes()
  notes.forEach((note)=>{
    console.log(note.title)
  })
}

const readNote=(title)=>{
  const notes=loadNotes()
  const desiredNote=notes.find((note)=>note.title===title)
  if(!desiredNote){
    console.log('Note not found')
  }else{
    console.log(chalk.green.inverse(title))
    console.log(desiredNote.body)
  }
}


module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes:listNotes,
  readNote:readNote
}

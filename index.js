// const num = 3 //number
// const name = "Ryan" //string
// const isStudent = true //boolean
// const student = { //object
//     id: 5,
//     name: "Ryan",
//     subjects: ["maths", "science", "english", "history"],
//     marks: {
//         maths: 90,
//         science:95,
//         english:85
//     }
// }
// student.subjects.map((sub,idx)=>{
//     console.log(idx,sub)
// })

// let students = [
//     { name: "Piyush", rollNumber: 31, marks: 80 },
//     { name: "Jenny", rollNumber: 15, marks: 69 }, 
//     { name: "Kaushal", rollNumber: 16, marks: 35 }, 
//     { name: "Dilpreet", rollNumber: 7, marks: 55 }
// ]
// students.map((student,idx) => {
//     console.log(student.name)
// })

// let students = [
//     { name: "Piyush", rollNumber: 31, marks: 80 },
//     { name: "Jenny", rollNumber: 15, marks: 69 }, 
//     { name: "Kaushal", rollNumber: 16, marks: 35 }, 
//     { name: "Dilpreet", rollNumber: 7, marks: 55 }
// ]
// students.map((student,idx) => {
// })//     console.log(student.marks)


// STARTING OFF NOTES APP

const notesContainer = document.querySelector('.notes');
const notes= JSON.parse(localStorage.getItem("notes")) || [];
const titleInput = document.querySelector('.note-title-input')
const descInput= document.querySelector('.note-desc-input')
const submitBtn = document.querySelector('.submit-btn')

notes.forEach((note) => {
  createNote(note)
  console.log(notesContainer) 
});

function resetForm() {
  titleInput.value = ""
  descInput.value = ""
}

function handleAddNote(e) {
  e.preventDefault(); //disable refreshing the browser
  console.log(titleInput.value)
  console.log(descInput.value)
  const note = {id:4, title:titleInput.value, description:descInput.value}
  createNote(note)
  saveNoteToLocalStorage(note)
  resetForm()
}

submitBtn.addEventListener('click',(e) => {
  handleAddNote(e)
}) 

function createNote(note) {
  const noteDiv = document.createElement("div")
  noteDiv.classList.add("note")
  const noteTitle = document.createElement("h2");
  noteTitle.textContent = note.title
  const noteDescription = document.createElement("p");
  noteDescription.classList.add("note-desc")
  noteDescription.textContent = note.description
  noteDiv.appendChild(noteTitle)
  noteDiv.appendChild(noteDescription)

  const iconsDiv = document.createElement("div");
  iconsDiv.classList.add("icons")
  const editIcon = document.createElement("i")
  editIcon.classList.add("fa-solid", "fa-pen-to-square")

  const deleteIcon = document.createElement("i")
  deleteIcon.classList.add("fa-solid", "fa-trash")
  iconsDiv.appendChild(editIcon)
  iconsDiv.appendChild(deleteIcon)    
  noteDiv.appendChild(iconsDiv)
  notesContainer.appendChild(noteDiv)

  editIcon.onclick = () => {
    console.log("Edit clicked for note:",);
    const input = document.createElement("input");
    input.type = "text";
    input.value = noteTitle.textContent;
    noteDiv.replaceChild(input,noteTitle)
    input.addEventListener("keydown", (event)=> {
      if(event.key == "Enter"){
        noteTitle.textContent= input.value
        noteDiv.replaceChild(noteTitle, input)
      }
    })
  } 

  noteDescription.onclick = () => {
    console.log("Edited description")
    const input = document.createElement("input")
    input.value=noteDescription.textContent
    input.classList.add("note-desc")
    noteDiv.replaceChild(input, noteDescription);
    input.addEventListener("keydown", (event)=> {
      if(event.key == "Enter") {
        noteDescription.textContent= input.value
        noteDiv.replaceChild(noteDescription, input);
      }
    })
  }

  deleteIcon.onclick = () => {
    console.log("Delete clicked for note:",);
    noteDiv.remove();
  } 
}
function saveNoteToLocalStorage(note) {
  notes.push(note)
  localStorage.setItem("notes",JSON.stringify(notes))
}

// implement edit description functionallity
// first log something on the console on click of the description 
// replace the note description(p) with an input tag having the same value as the text content of the p
// // const notes=[
//     {id:1, title:1, description:"first description"},
//     {id:2, title:2, description:"second description"},
//     {id:3, title:3, description:"third description"}
// ]

// localStorage.setItem("notes",JSON.stringify(notes))
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
const notes=[
    {id:1, title:1, description:"first description"},
    {id:2, title:2, description:"second description"},
    {id:3, title:3, description:"third description"}
]
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
  noteDescription.textContent = note.description
  noteDiv.appendChild(noteTitle)
  noteDiv.appendChild(noteDescription)

  notesContainer.appendChild(noteDiv)
}
//each row  must have only 4 notes 
// notes have should a margin or gap between them
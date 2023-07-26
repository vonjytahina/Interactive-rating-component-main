// DOM elements declarations
const note = document.querySelectorAll('.note li')
const submit = document.querySelector('.submit')
const response = document.querySelector('.response')
const rating = document.querySelector('.rating')
const thankYou = document.querySelector('.thank-you')

// note value
var noteValue = 1

// note selection
for(let i = 0; i < note.length; i++) {
  note[i].onclick = () => {
    note[i].classList.add('checked')
    noteValue = i + 1
    for (let j = 0; j < note.length; j++) {
      if(j !== i) {
        note[j].classList.remove('checked')
      }
    }
  }
}

// on submit
submit.onclick = () => {
  response.innerHTML = `You selected ${noteValue} out of 5`
  rating.style.display = "none"
  thankYou.style.display = "flex"
}
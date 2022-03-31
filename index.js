document.addEventListener("DOMContentLoaded", () => {
    console.log("content has loaded")


let submitForm = document.querySelector("#comment-form")
submitForm.addEventListener("submit", (event) => {
    event.preventDefault()

const list = document.querySelector("#list")
const li = document.createElement("li")
li.innerText = event.target.comment.value
list.appendChild(li)
    })
})



let drinks


document.addEventListener("DOMContentLoaded", () => {
    console.log("content has loaded")

    getDrinks()
    createComments()
})

function getDrinks() {
    const drinksUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    fetch(drinksUrl)
    .then(resp => resp.json())
    .then(drinkData => {
        drinks = drinkData.drinks
        // console.log("drinks", drinks)
        // console.log("drinkdata", drinkData)
        displayDrinks()
    })
}

function displayDrinks() {
    const div = document.querySelector("#drink-image-container")
    drinks.forEach(drink => {
        // console.log(drink.idDrink)
        const li = document.createElement("li")
        div.appendChild(li)
        const a = document.createElement("a")
        a.href = "#"
        a.id = drink.idDrink
        a.innerText = drink.strDrink
        li.appendChild(a)
    })
    div.addEventListener("click", displayDrink)
}

function displayDrink(e) {
    console.log(e.target.id)
    const div = document.querySelector("#drink-image-container")
    div.innerHTML = " "
}



//creating the comment section and posting comments
function createComments() {
    const submitForm = document.querySelector("#comment-form")
    submitForm.addEventListener("submit", (event) => {
        event.preventDefault()

    const list = document.querySelector("#list")
    const li = document.createElement("li")
    li.innerText = event.target.comment.value
    list.appendChild(li)  
    })  
}









// const drinks = []

// function getDrinks() {
//     const drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
//     fetch(drinkUrl)
//     .then(resp => resp.json())
//     .then(resp => {
//         resp.drinks.forEach(drink => {
//             addDrinksToDOM(drink)
//         }) 
        // console.log("resp", resp)
        // resp.drinks.forEach(drink => console.log(drink))
        
//     })
// }
// getDrinks()


// function addDrinksToDOM(drink) {
//     const drinkCollection = document.querySelector("#drink-image-container")
//     const div = document.createElement("div")
//     // div.className = "drink-div"
//     div.classList.add("drink-div")
//     drinkCollection.append(div)
    
//     const drinkName = document.createElement("h2")
//     drinkName.innerText = "hello!"
//     div.append(drinkName)
// }



// function addDrinksToDOM(drink) {
//     const div = document.querySelector("#drink-image-container")
//         const li = document.createElement("li")
//         li.textContent = drink
//         div.append(li)
// }
// addDrinksToDOM()

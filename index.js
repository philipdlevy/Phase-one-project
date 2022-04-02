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
    const div = document.querySelector("#links")
    drinks.forEach(drink => {
        // console.log(drink.idDrink)
        const divForDrink = document.createElement("div")
        div.appendChild(divForDrink)
        const a = document.createElement("a")
        a.href = "#"
        a.id = drink.idDrink
        a.innerText = drink.strDrink
        divForDrink.appendChild(a)
    })
    div.addEventListener("click", displayDrink)
}

function hideLinks() {
    const links = document.querySelector("#links")
    links.addEventListener("click", () => {
        links.classList.add("hidden")
    })
}
hideLinks()

function displayDrink(e) {
    // console.log("target", typeof e.target.id)
    const div = document.querySelector("#drink-image-container")
    // div.innerHTML = ''
    const info = document.querySelector("#info")
    const drink = drinks.find(singleDrink => singleDrink.idDrink === e.target.id)
    // console.log("drink", drink) 
    // console.log("info", info) 
    info.innerHTML = `
        <h1>${drink.strDrink}</h1>
        <h3>Instructions</h3>
        <p>${drink.strInstructions}</p>
        <h3>Ingredients</h3>
        <li>${drink.strIngredient1}</li>
        <li>${drink.strIngredient2}</li>
        <li>${drink.strIngredient3}</li>
        <li>${drink.strIngredient4}</li>
        <li>${drink.strIngredient5}</li>
        <li>${drink.strIngredient6}</li>
        <li>${drink.strIngredient7}</li>



        <img src="${drink.strDrinkThumb}"/>
    `
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










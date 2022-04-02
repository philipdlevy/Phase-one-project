let drinks
let currentIndex = 0

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
        displayDrink(currentIndex)
    })
}

function displayDrink(index) {
    const div = document.querySelector("#drink-image-container")
    const info = document.querySelector("#info")
    const drink = drinks[index]
    info.innerHTML = `
        <h1>${drink.strDrink}</h1>
        <h3>Instructions</h3>
        <p>${drink.strInstructions}</p>
        <h3>Glass needed</h3>
        <li>${drink.strGlass}</li>
        <h3>Ingredients</h3>
        <li>${drink.strIngredient1}</li>
        <li>${drink.strIngredient2}</li>
        <li>${drink.strIngredient3}</li>
        <li>${drink.strIngredient4}</li>
        <li>${drink.strIngredient5}</li>
        <li>${drink.strIngredient6}</li>
        <li>${drink.strIngredient7}</li>

        <h3 class="measure">Measurements</h3>
        <li class="measure">${drink.strMeasure1}</li>
        <li class="measure">${drink.strMeasure2}</li>
        <li class="measure">${drink.strMeasure3}</li>
        <li class="measure">${drink.strMeasure4}</li>
        <li class="measure">${drink.strMeasure5}</li>
        <li class="measure">${drink.strMeasure6}</li>
        <li class="measure">${drink.strMeasure7}</li>

        <img src="${drink.strDrinkThumb}" id="image"/>
    `
    let btnPrev = document.createElement("button")
    info.appendChild(btnPrev)
    btnPrev.innerText = "Previous"
    btnPrev.id = "previous"
    btnPrev.addEventListener("click", selectPrevious)

    let btnNext = document.createElement("button")
    info.appendChild(btnNext)
    btnNext.innerText = "Next"
    btnNext.id = "next"
    btnNext.addEventListener("click", selectNext)
}

function selectNext() {
    if(currentIndex < drinks.length-1) {
        currentIndex++
        displayDrink(currentIndex)
    }
}

function selectPrevious() {
    if(currentIndex > 0) {
        currentIndex--
        displayDrink(currentIndex)
    }
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










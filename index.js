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
//displaying drink info
function displayDrink(index) {
    const div = document.querySelector("#drink-image-container")
    const info = document.querySelector("#info")
    const drink = drinks[index]
    const lis = Object.keys(drink).filter(key => key.startsWith("strIngredient")).filter(k => drink[k]).map(k => {
        return `<li>${drink[k]}</li>`
    }).join("")
    const lisMeasure = Object.keys(drink).filter(key => key.startsWith("strMeasure")).filter(key => drink[key]).map(key => `<li class="measure">${drink[key]}</li>`).join("")
    console.log(lisMeasure)
    // console.log(lis)
    info.innerHTML = `
        <h1>${drink.strDrink}</h1>
        <h3>Instructions</h3>
        <p>${drink.strInstructions}</p>
        <h3>Glass needed</h3>
        <li>${drink.strGlass}</li>
        <h3>Ingredients</h3>
        ${lis}

        <h3 class="measure">Measurements</h3>
        ${lisMeasure}

        <img src="${drink.strDrinkThumb}" id="image"/>
    `
    //creating previous button
    let btnPrev = document.createElement("button")
    info.appendChild(btnPrev)
    btnPrev.innerText = "Previous"
    btnPrev.id = "previous"
    btnPrev.addEventListener("click", selectPrevious)
    //creating next button
    let btnNext = document.createElement("button")
    info.appendChild(btnNext)
    btnNext.innerText = "Next"
    btnNext.id = "next"
    btnNext.addEventListener("click", selectNext)
}
//next button functionality
function selectNext() {
    if(currentIndex < drinks.length-1) {
        currentIndex++
        displayDrink(currentIndex)
    }
}
//previous button functionality
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

    submitForm.reset();
    })  
}







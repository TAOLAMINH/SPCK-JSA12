const searchInput = document.getElementById("search-input")
const dishname = document.querySelector(".dish-name")
const dishtype = document.querySelector(".dish-cuisine")
const disingredients = document.querySelector(".dish-ingredients")
searchInput.addEventListener("change", (event) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.value}`)
        .then(response => response.json())
        .then((data) => {
          for (item of data.meals) {
            let meals = document.createElement("div")
            let img = document.createElement("img")
            let categories = document.createElement("div")
            let disharea = document.createElement("div")
            let dishinstruction = document.createElement("div")
            img.src = item.strMealThumb
          
            let name = document.createElement("div")
            name.innerHTML = item.strMeal
            categories.innerHTML = item.strCategory
            disharea.innerHTML = item.strArea
            dishinstruction.innerHTML = item.strInstructions


            

            meals.appendChild(img)
            meals.appendChild(name)
            meals.appendChild(categories)
            meals.appendChild(disharea)
            meals.appendChild(dishinstruction)
        }
        })
})

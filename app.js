const searchInput = document.getElementById("search-input")
const dish_name = document.getElementById("dish-name")
const dish_origin = document.getElementById("dish-origin")
const dish_instructions = document.getElementById("dish-instructions")
const dish_ingredients = document.getElementById("dish-ingredients")
searchInput.addEventListener("change", (event) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.value}`)
        .then(response => response.json())
        .then((data) => {
          dish_name.innerHTML = data.meals[0].strMeal
          dish_origin.innerHTML = data.meals[0].strArea
          dish_instructions.innerHTML = data.meals[0].strInstructions
          let ingredients = ""
          for (let i = 1; i <= 20; i++){
            var strIngredient = "strIngredient" + String(i)  
            if (data.meals[0][strIngredient] != '')
            {
              ingredients += data.meals[0][strIngredient] + "; "
            }
          }
          dish_ingredients.innerHTML = ingredients
        })
})

const categories = document.getElementById("categories")
fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(response => response.json())
    .then((data) => {
        for (item of data.categories) {
            let recipe = document.createElement("div")
            let img = document.createElement("img")
            img.src = item.strCategoryThumb

            let name = document.createElement("div")
            name.innerHTML = item.strCategory

            let description = document.createElement("div")
            // console.log(description)
            description.innerHTML = item.strCategoryDescription

            

            recipe.appendChild(img)
            recipe.appendChild(name)
            recipe.appendChild(description)
            categories.appendChild(recipe)
        }
    })

    
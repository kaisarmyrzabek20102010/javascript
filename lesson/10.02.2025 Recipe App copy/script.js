let allMeals = [];

async function fetchMeals() {
    try {
        const response = await fetch('meals.json');
        const data = await response.json();
        allMeals = data.meals;
        displayMeals(allMeals); 
    } catch (error) {
        console.error("Тағамдарды алу кезінде қате орын алды:", error);
    }
}

function displayMeals(meals) {
    const container = document.getElementById('meals-container'); 
    container.innerHTML = ''; 

    meals.forEach(meal => {
        const mealCard = `
            <div class="card" data-name="${meal.strMeal.toLowerCase()}">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}"> 
                <div class="card-content">
                    <h3>${meal.strMeal}</h3> 
                    <div class="info">
                        <div class="icon">
                            <img src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" alt="Дайындалу уақыты">
                            ${meal.strTime} минут
                        </div>
                        <div class="icon">
                            <img src="https://cdn-icons-png.flaticon.com/512/5356/5356892.png" alt="Калория мөлшері">
                            ${meal.strCalories} ккал
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += mealCard;
    });

    document.getElementById('no-results').style.display = meals.length ? 'none' : 'block';
}

function filterMeals() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredMeals = allMeals.filter(meal => 
        meal.strMeal.toLowerCase().includes(searchInput)
    );
    displayMeals(filteredMeals);
}

fetchMeals();
let allMeals = []; // Барлық тағамдарды ғаламдық айнымалыда сақтау

// Ас мәзіріндегі тағамдарды API немесе жергілікті JSON файлынан алу
async function fetchMeals() {
    try {
        const response = await fetch('meals.json'); // Файлды жүктеу
        const data = await response.json(); // JSON-ды оқу
        allMeals = data.meals; // Барлық тағамдарды ғаламдық массивке сақтау
        displayMeals(allMeals); // Тағамдарды экранға шығару
    } catch (error) {
        console.error("Тағамдарды алу кезінде қате орын алды:", error);
    }
}

// Тағамдарды веб-бетке шығару функциясы
function displayMeals(meals) {
    const container = document.getElementById('meals-container'); // Тағамдар көрсетілетін аймақ
    container.innerHTML = ''; // Алдыңғы нәтижелерді тазалау

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
        container.innerHTML += mealCard; // Әрбір тағамды контейнерге қосу
    });

    // Егер нәтиже табылмаса, "Тағамдар табылған жоқ" деген хабарламаны көрсету
    document.getElementById('no-results').style.display = meals.length ? 'none' : 'block';
}

// Іздеу жолағына енгізілген мәтінге сәйкес тағамдарды сүзгілеу
function filterMeals() {
    const searchInput = document.getElementById('search').value.toLowerCase(); // Іздеу мәнін кіші әріпке айналдыру
    const filteredMeals = allMeals.filter(meal => 
        meal.strMeal.toLowerCase().includes(searchInput) // Іздеу мәтіні бар ма, жоқ па тексеру
    );
    displayMeals(filteredMeals); // Сүзгіден өткен тағамдарды көрсету
}

// Бет жүктелген кезде тағамдарды алу
fetchMeals();

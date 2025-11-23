import recipes from './recipes.mjs';

//Called in getRandomListEntry
function random(num) {
	return Math.floor(Math.random() * num);
}

//Called in init
function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

//Called in recipeTemplate
function tagsTemplate(tags) {
	return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

//Called in recipeTemplate
function ratingTemplate(rating) {
	let html = `<span
        class="rating"
        role="img"
        aria-label="Rating: ${rating} out of 5 stars"
    >`;

	for (let i = 1; i <= 5; i++) {
        // If the current index is less than or equal to the rating, output a filled star
		if (i <= rating) {
			html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } 
        else {
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
		}
	}
    
	html += `</span>`;
    
	return html;
}

//Called in renderRecipes
function recipeTemplate(recipe) {
    const defaultServing = 'Varies';
    const prepTime = recipe.prepTime || 'N/A';
    const cookTime = recipe.cookTime || 'N/A';
    const recipeYield = recipe.recipeYield || defaultServing;

	return `
    <h2 class="sr-only">Featured Recipe: ${recipe.name}</h2>
            
    <div class="recipe-layout">
        
        <div class="recipe-image-container">
            <img 
                src="${recipe.image}" 
                alt="Image of ${recipe.name}" 
                class="recipe-image"
            >
        </div>

        <div class="recipe-details">

            <div class="recipe-tags">
                ${tagsTemplate(recipe.tags)}
            </div>

            <h3 class="recipe-title logo-text">${recipe.name.toUpperCase()}</h3>
            
            <div class="recipe-rating-container">
                ${ratingTemplate(recipe.rating)}
            </div>

            <p class="recipe-description">
                ${recipe.description}
            </p>
            
            <div class="recipe-info">
                <p>Prep Time: ${prepTime} | Cook Time: ${cookTime} | Servings: ${recipeYield}</p>
            </div>
        </div>
    </div>
    `;
}

//Called in searchHandler & init
function renderRecipes(recipeList) {
    const recipeCardElement = document.querySelector('.recipe-card');
    let htmlContent = '';
    if (recipeList.length > 0) {
        htmlContent = recipeTemplate(recipeList[0]);
    } else {
        htmlContent = '<h2>No recipes found matching your search. Try a different term!</h2>';
    }

    // Set the HTML strings as the innerHTML of our output element.
    recipeCardElement.innerHTML = htmlContent;
}

//Called in searchHandler
function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        const checkName = recipe.name.toLowerCase().includes(query);
        const checkDescription = recipe.description.toLowerCase().includes(query);
        
        // Check if query is found in any of the tags
        const checkTags = recipe.tags.find(tag => tag.toLowerCase().includes(query));
        
        // Check if query is found in any of the ingredients
        const checkIngredients = recipe.recipeIngredient.find(ing => ing.toLowerCase().includes(query));

        // Return true if any of the checks pass
        return checkName || checkDescription || checkTags || checkIngredients;
    });

    // Sort by name alphabetically
    const sorted = filtered.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    return sorted;
}

//Called in init
function searchHandler(e) {
	e.preventDefault();
    
	// Get the search input value
    const searchInput = document.getElementById('recipe-search');
    
    // Convert the value in the input to lowercase
    const query = searchInput.value.toLowerCase();
    
    // Use the filter function to filter our recipes
    const filteredRecipes = filterRecipes(query);
    
    // Render the filtered list (or the first result)
    renderRecipes(filteredRecipes);
}


//Initializes the page by displaying a random recipe and setting up the search listener.
function init() {
    const recipe = getRandomListEntry(recipes);

    renderRecipes([recipe]);

    // Event listener for the search form
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', searchHandler);
}

init();
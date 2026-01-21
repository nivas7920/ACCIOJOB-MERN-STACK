// ===== LocalStorage keys =====
const KEY_RECIPES = "rr_recipes";
const KEY_FAV = "rr_fav";
const KEY_RECENT = "rr_recent";

// ===== State =====
let recipes = [];
let favIds = [];
let recentIds = [];

// ===== DOM elements =====
const form = document.getElementById("recipeForm");
const nameInput = document.getElementById("name");
const ingredientsInput = document.getElementById("ingredients");
const timeInput = document.getElementById("time");
const difficultyRadios = document.querySelectorAll('input[name="difficulty"]');
const categoryChecks = document.querySelectorAll('input[name="category"]');
const submitBtn = document.getElementById("submitBtn");
const spinBtn = document.getElementById("spinBtn");

const nameError = document.getElementById("nameError");
const ingredientsError = document.getElementById("ingredientsError");
const timeError = document.getElementById("timeError");
const difficultyError = document.getElementById("difficultyError");
const categoryError = document.getElementById("categoryError");

const allContainer = document.getElementById("allRecipes");
const favContainer = document.getElementById("favoriteRecipes");
const recentContainer = document.getElementById("recentRecipes");

const allEmpty = document.getElementById("allEmpty");
const favEmpty = document.getElementById("favEmpty");
const recentEmpty = document.getElementById("recentEmpty");

// ===== Storage helpers =====
function loadFromStorage() {
  recipes = JSON.parse(localStorage.getItem(KEY_RECIPES) || "[]");
  favIds = JSON.parse(localStorage.getItem(KEY_FAV) || "[]");
  recentIds = JSON.parse(localStorage.getItem(KEY_RECENT) || "[]");
}

function saveToStorage() {
  localStorage.setItem(KEY_RECIPES, JSON.stringify(recipes));
  localStorage.setItem(KEY_FAV, JSON.stringify(favIds));
  localStorage.setItem(KEY_RECENT, JSON.stringify(recentIds));
}

// ===== Helpers for form =====
function getDifficulty() {
  let value = null;
  difficultyRadios.forEach((r) => {
    if (r.checked) value = r.value;
  });
  return value;
}

function getCategories() {
  const out = [];
  categoryChecks.forEach((c) => {
    if (c.checked) out.push(c.value);
  });
  return out;
}

// ===== Validation =====
function validateForm() {
  let ok = true;

  // name
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    ok = false;
  } else {
    nameError.textContent = "";
  }

  // ingredients
  if (!ingredientsInput.value.trim()) {
    ingredientsError.textContent = "Ingredients are required.";
    ok = false;
  } else {
    ingredientsError.textContent = "";
  }

  // time
  const timeVal = Number(timeInput.value);
  if (!timeVal || timeVal < 5) {
    timeError.textContent = "Time must be at least 5 minutes.";
    ok = false;
  } else {
    timeError.textContent = "";
  }

  // difficulty
  if (!getDifficulty()) {
    difficultyError.textContent = "Select difficulty.";
    ok = false;
  } else {
    difficultyError.textContent = "";
  }

  // categories
  if (getCategories().length === 0) {
    categoryError.textContent = "Select at least one category.";
    ok = false;
  } else {
    categoryError.textContent = "";
  }

  submitBtn.disabled = !ok;
  return ok;
}

form.addEventListener("input", validateForm);
form.addEventListener("change", validateForm);

// ===== Create recipe card =====
function createRecipeCard(recipe) {
  const card = document.createElement("div");
  card.className = "recipe-card";
  card.dataset.id = recipe.id;
  card.style.position = "relative"; // for favorite badge

  const header = document.createElement("div");
  header.className = "recipe-card-header";

  const title = document.createElement("div");
  title.className = "recipe-title";
  title.textContent = recipe.name;

  const meta = document.createElement("div");
  meta.className = "recipe-meta";
  meta.textContent = `${recipe.time} min • ${recipe.difficulty}`;

  header.appendChild(title);
  header.appendChild(meta);

  const cats = document.createElement("div");
  cats.className = "recipe-categories";
  cats.textContent = recipe.categories.join(", ");

  const actions = document.createElement("div");
  actions.className = "recipe-actions";

  const cookBtn = document.createElement("button");
  cookBtn.className = "recipe-btn cook";
  cookBtn.textContent = "Cook This!";
  cookBtn.dataset.action = "cook";

  const favBtn = document.createElement("button");
  favBtn.className = "recipe-btn favorite";
  favBtn.textContent = favIds.includes(recipe.id) ? "Unfavorite ⭐" : "Favorite ⭐";
  favBtn.dataset.action = "favorite";

  const delBtn = document.createElement("button");
  delBtn.className = "recipe-btn delete";
  delBtn.textContent = "Delete 🗑️";
  delBtn.dataset.action = "delete";

  actions.append(cookBtn, favBtn, delBtn);

  card.append(header, cats, actions);

  if (favIds.includes(recipe.id)) {
    const badge = document.createElement("div");
    badge.className = "favorite-badge";
    badge.textContent = "⭐";
    card.appendChild(badge);
  }

  return card;
}

// ===== Render sections =====
function renderAll() {
  // All recipes
  allContainer.innerHTML = "";
  if (recipes.length === 0) {
    allEmpty.style.display = "block";
  } else {
    allEmpty.style.display = "none";
    recipes.forEach((r) => allContainer.appendChild(createRecipeCard(r)));
  }

  // Favorites
  favContainer.innerHTML = "";
  const favList = recipes.filter((r) => favIds.includes(r.id));
  if (favList.length === 0) {
    favEmpty.style.display = "block";
  } else {
    favEmpty.style.display = "none";
    favList.forEach((r) => favContainer.appendChild(createRecipeCard(r)));
  }

  // Recently cooked
  recentContainer.innerHTML = "";
  const recentList = recentIds
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);
  if (recentList.length === 0) {
    recentEmpty.style.display = "block";
  } else {
    recentEmpty.style.display = "none";
    recentList.forEach((r) => recentContainer.appendChild(createRecipeCard(r)));
  }
}

// ===== Form submit =====
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const recipe = {
    id: Date.now().toString(),
    name: nameInput.value.trim(),
    ingredients: ingredientsInput.value.trim(),
    time: Number(timeInput.value),
    difficulty: getDifficulty(),
    categories: getCategories(),
  };

  recipes.push(recipe);
  saveToStorage();
  renderAll();

  form.reset();
  validateForm(); // re-disable button
});

// ===== Actions =====
function cookRecipe(id) {
  // add to front, unique, max 5
  recentIds = [id, ...recentIds.filter((x) => x !== id)].slice(0, 5);
  saveToStorage();
  renderAll();
}

function toggleFavorite(id) {
  if (favIds.includes(id)) {
    favIds = favIds.filter((x) => x !== id);
  } else {
    favIds.push(id);
  }
  saveToStorage();
  renderAll();
}

function deleteRecipe(id) {
  recipes = recipes.filter((r) => r.id !== id);
  favIds = favIds.filter((x) => x !== id);
  recentIds = recentIds.filter((x) => x !== id);
  saveToStorage();
  renderAll();
}

// ===== Event delegation for all 3 sections =====
[allContainer, favContainer, recentContainer].forEach((container) => {
  container.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const card = btn.closest(".recipe-card");
    if (!card) return;

    const id = card.dataset.id;
    const action = btn.dataset.action;

    if (action === "cook") cookRecipe(id);
    if (action === "favorite") toggleFavorite(id);
    if (action === "delete") deleteRecipe(id);
  });
});

// ===== Spin the Wheel (random picker) =====
spinBtn.addEventListener("click", () => {
  const cards = Array.from(allContainer.querySelectorAll(".recipe-card"));
  if (cards.length === 0) {
    alert("No recipes to choose from. Add some first!");
    return;
  }

  let cycles = 15;
  let current = null;

  const interval = setInterval(() => {
    if (current) current.classList.remove("highlight");

    const index = Math.floor(Math.random() * cards.length);
    current = cards[index];
    current.classList.add("highlight");

    cycles--;
    if (cycles <= 0) {
      clearInterval(interval);
      cookRecipe(current.dataset.id);
    }
  }, 100);
});

// ===== Init =====
(function init() {
  loadFromStorage();
  renderAll();
  validateForm(); // to set initial disabled state
})();

const searchInput = document.querySelector('#link-search-input');
const searchStatus = document.querySelector('.search-status');
const searchResults = document.querySelector('.search-results');
const resultsList = searchResults.querySelector('ul');
const categoryPicker = document.querySelector('.category-picker');
const categories = document.querySelectorAll('.category');

// Collected before any search runs, so the copies shown in the results never get searched themselves
const searchableLinks = [...document.querySelectorAll('main a, footer a')];

let currentCategory = categoryPicker.querySelector(':checked').value;
let statusTimer;

function showCurrentCategory() {
  clearTimeout(statusTimer);
  searchStatus.textContent = '';
  searchResults.hidden = true;
  resultsList.replaceChildren();
  categoryPicker.querySelector(`[value="${currentCategory}"]`).checked = true;

  for (const category of categories) {
    category.hidden = category.id !== currentCategory;
  }
}

function showSearchResults(query, words) {
  const matches = searchableLinks.filter((link) => {
    const name = link.textContent.toLowerCase();
    return words.every((word) => name.includes(word));
  });

  resultsList.replaceChildren(...matches.map((link) => {
    const item = document.createElement('li');
    item.append(link.cloneNode(true));
    return item;
  }));
  searchResults.hidden = matches.length === 0;

  for (const category of categories) {
    category.hidden = true;
  }
  // Unchecked so screen readers don't report a category as selected while its links are hidden
  for (const radio of categoryPicker.elements) {
    radio.checked = false;
  }

  announce(describeMatches(matches.length, query));
}

function describeMatches(count, query) {
  if (count === 0) return `No links match “${query}”.`;
  if (count === 1) return `1 link matches “${query}”.`;
  return `${count} links match “${query}”.`;
}

function announce(message) {
  clearTimeout(statusTimer);
  // Waits for a pause in typing, so screen readers don't read out a new count after every letter
  statusTimer = setTimeout(() => {
    searchStatus.textContent = message;
  }, 500);
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  const words = query.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);

  if (words.length > 0) {
    showSearchResults(query, words);
  } else {
    showCurrentCategory();
  }
});

categoryPicker.addEventListener('change', (event) => {
  currentCategory = event.target.value;
  searchInput.value = '';
  showCurrentCategory();
});

for (const control of document.querySelectorAll('.everything-else-hint, .link-search, .category-picker')) {
  control.hidden = false;
}
showCurrentCategory();

const searchInput = document.querySelector('#link-search-input');
const searchStatus = document.querySelector('.search-status');
const searchResults = document.querySelector('.search-results');
const resultsList = searchResults.querySelector('ul');
const noMatches = searchResults.querySelector('.no-matches');
const categoryPicker = document.querySelector('.category-picker');
const categories = document.querySelectorAll('.category');

// Collected before any search runs, so the copies shown in the results never get searched themselves.
// Each destination is kept once, since the final exam links are in both the finals bar and their category
const seenAddresses = new Set();
const searchableLinks = [...document.querySelectorAll('main a, footer a')].filter((link) => {
  if (seenAddresses.has(link.href)) return false;
  seenAddresses.add(link.href);
  return true;
});

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
    // Also tries each word without a final "s", so "final exams" still finds Final Exam Schedule
    return words.every((word) => name.includes(word) || (word.endsWith('s') && name.includes(word.slice(0, -1))));
  });

  resultsList.replaceChildren(...matches.map((link) => {
    const item = document.createElement('li');
    item.append(link.cloneNode(true));
    return item;
  }));

  const message = describeMatches(matches.length, query);
  resultsList.hidden = matches.length === 0;
  noMatches.hidden = matches.length > 0;
  noMatches.textContent = message;
  // The box stays open even with no matches, so the page doesn't jump around while someone types
  searchResults.hidden = false;

  for (const category of categories) {
    category.hidden = true;
  }
  // Unchecked so screen readers don't report a category as selected while its links are hidden
  for (const radio of categoryPicker.elements) {
    radio.checked = false;
  }

  announce(message);
}

function describeMatches(count, query) {
  if (count === 0) return `No matches for “${query}”.`;
  if (count === 1) return `1 match for “${query}”.`;
  return `${count} matches for “${query}”.`;
}

// Timing borrowed from GOV.UK's accessible-autocomplete, which was tested with VoiceOver.
// Emptying the status on every key and refilling it 1.4 seconds after typing stops means
// VoiceOver finishes echoing the typed word and its own hints first, then reads the count as new text
function announce(message) {
  clearTimeout(statusTimer);
  searchStatus.textContent = '';
  statusTimer = setTimeout(() => {
    searchStatus.textContent = message;
  }, 1400);
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

// Buttons and cards don't leave a see-through copy behind when dragged.
// Text links still drag normally, so people can drop them on the tab bar to open a new tab
document.addEventListener('dragstart', (event) => {
  if (event.target instanceof Element && event.target.matches('.task-card a, .finals-links a, .skip-link, .back-link, img')) {
    event.preventDefault();
  }
});

for (const control of document.querySelectorAll('.everything-else-hint, .link-search, .category-picker')) {
  control.hidden = false;
}
showCurrentCategory();

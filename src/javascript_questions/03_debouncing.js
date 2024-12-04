// Q. What is debouncing






// Debounce function
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer); // Clear any existing timer
        timer = setTimeout(() => {
            func.apply(this, args); // Execute the function after the delay
        }, delay);
    };
}

// Example usage: API call on user input
const searchInput = document.getElementById('search');

function fetchResults(query) {
    console.log(`Fetching results for: ${query}`);
    // Simulate API call here
}

const debouncedFetch = debounce(fetchResults, 500);

searchInput.addEventListener('input', (event) => {
    debouncedFetch(event.target.value); // Call the debounced function
});

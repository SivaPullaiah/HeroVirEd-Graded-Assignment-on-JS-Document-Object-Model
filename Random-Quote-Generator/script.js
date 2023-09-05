// DOM Elements
const quoteContainer = document.querySelector('.quote');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Event Listener for the New Quote Button
newQuoteBtn.addEventListener('click', getNewQuote);

// Function to fetch a new quote from the API
async function getNewQuote() {
  try {
    // Fetch a random quote from the API
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();

    // Get a random quote from the response data
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];

    // Update the quote container with the new quote
    quoteContainer.innerHTML = `<p>"${randomQuote.text}"</p><p class="author">- ${randomQuote.author || 'Unknown'}</p>`;
  } catch (error) {
    console.error('Error fetching a new quote:', error);
  }
}

// Initial call to get a new quote when the page loads
getNewQuote();
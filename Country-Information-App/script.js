// DOM Elements
const countryInfoContainer = document.querySelector('.country-info');

// Function to fetch country data from the API
async function getCountryData() {
  try {
    // Fetch country data from the API
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    // Get a random country from the response data
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomCountry = data[randomIndex];

    // Create HTML to display country information
    const countryHTML = `
      <h2>${randomCountry.name.common}</h2>
      <p><strong>Capital:</strong> ${randomCountry.capital || 'N/A'}</p>
      <p><strong>Population:</strong> ${randomCountry.population || 'N/A'}</p>
      <p><strong>Region:</strong> ${randomCountry.region || 'N/A'}</p>
      <p><strong>Subregion:</strong> ${randomCountry.subregion || 'N/A'}</p>
      <p><strong>Country Code:</strong> ${randomCountry.cca2 || 'N/A'}</p>
    `;

    // Update the country info container with the new data
    countryInfoContainer.innerHTML = countryHTML;
  } catch (error) {
    console.error('Error fetching country data:', error);
  }
}

// Initial call to get country data when the page loads
getCountryData();

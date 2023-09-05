document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "f177dd597621be83449db97e3b6c503f"; // Replace with your actual OpenWeatherMap API key
    const location = "Nandal,IN"; // Replace with your desired location
    const weatherDataElement = document.querySelector(".weather-data");
  
    // Create a script element to make the JSONP request
    const script = document.createElement("script");
    script.src = `https://api.openweathermap.org/data/2.5/weather?q=${location}&callback=displayWeather&appid=${apiKey}`;
  
    // Append the script to the document's head
    document.head.appendChild(script);
  
    // Define the callback function to handle the JSONP response
    window.displayWeather = function (data) {
      if (data.cod === 200) {
        // Weather data is available
        const temperatureCelsius = (data.main.temp - 273.15).toFixed(2); // Convert from Kelvin to Celsius
        const weatherCondition = data.weather[0].description;
  
        // Update the HTML with weather data
        weatherDataElement.innerHTML = `
          <p>Location: ${data.name}, ${data.sys.country}</p>
          <p>Temperature: ${temperatureCelsius}°C</p>
          <p>Condition: ${weatherCondition}</p>
        `;
      } else {
        // Handle API error
        weatherDataElement.innerHTML = `<p>Error: ${data.message}</p>`;
      }
    };
  });
  
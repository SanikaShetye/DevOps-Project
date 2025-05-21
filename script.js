document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '5aeb939430173d370a79217e72a4fc09';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = `
                    <h2>Weather in ${data.name}</h2>
                    <p><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}"></p>
                    <p>Temperature: ${data.main.temp} &deg;C</p>
                    <p>Description: ${data.weather[0].description}</p>
                `;
                document.getElementById('weatherInfo').innerHTML = weatherInfo;
                document.getElementById('error').textContent = '';
            } else {
                document.getElementById('weatherInfo').innerHTML = '';
                document.getElementById('error').textContent = 'City not found. Please try again.';
            }
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = '';
            document.getElementById('error').textContent = 'An error occurred. Please try again later.';
            console.error('Error fetching the weather data:', error);
        });
});

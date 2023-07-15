# Server-Side APIs: Weather Dashboard

The challenge was to use third-party APIs which allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. This challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

This app is aimed towards travelers who want to see the weather outlook for multiple cities, so that they can plan a trip accordingly.

Explore the app here: https://patrickdmorgan.github.io/module-6-challenge/

## Installation
```
i. Fork the Github repository.
ii. Clone the forked repo into your local machine using gitbash/terminal to pull the project and data.
iii. Access the index.html, style.css and script.js files and assets via Visual Studio or in your browser to view the code and website respectively.  
iv. Open and explore the app.
```

## Usage
Server-Side API Components Used:
```bash
JSON - AJAX - HTTP GET Requests - OpenWeatherMap API
```
See screenshot below of the application:
![Weather Dashboard](/assets/images/WeatherDashboard.png)



## Key Checks Included ensuring the following:
Given a weather dashboard with form inputs:
1. When a user searches for a city, the user is presented with current conditions and a 5-day forecast.  That city is then added to the search history.
2. When a user views the current weather conditions for that city, thee user is presented with the city name, the date, and an icon representation of weather conditions, temperature, humidity, wind speed, and UV index.
3. When a user views the UV index, the user is presented with a color which indicates if the conditions are favorable, moderate, or severe.
4. When a user views future weather conditions for that city, the user is presented with a 5-day forecast that displays the date, an icon which represents weather conditions, temperature, and humidity.
5. When a user clicks on a city in the search history, the user is again presented with current and future conditions for that city.
6. When a user opens the weather dashboard, the user is presented with the last searched city.

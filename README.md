# Server-Side APIs: Weather Dashboard

The challenge was to use third-party APIs which allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. This challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

This app is aimed towards travelers who want to see the weather outlook for multiple cities, so that they can plan a trip accordingly.

Explore the app here: 

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
1. When user searches for a city, then user is presented with current and future conditions for that city and that city is added to the search history
2. When user views current weather conditions for that city, then user is presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
3. When user views the UV index, then user is presented with a color that indicates whether the conditions are favorable, moderate, or severe
4. When user views future weather conditions for that city, then user is presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
5. When user clicks on a city in the search history, then user is again presented with current and future conditions for that city
6. When user opens the weather dashboard, then user is presented with the last searched city forecast

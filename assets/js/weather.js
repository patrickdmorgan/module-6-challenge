$(document).ready(function(){

var searchedCitiesArray = [];
$("#searchBtn").on("click", getSearchInput);
$(document).on("click", ".selected", storedCities);
    
searchHistory();
    
function storedCities() {

var city = $(this)[0].innerHTML;
    getWeather(city);
    }
    
function getSearchInput(event) {
    event.preventDefault();
    $("#previousSearches").empty();
        
var city = $(".form-control").val(); 
    searchedCitiesArray.push(city);
    localStorage.setItem("cities", JSON.stringify(searchedCitiesArray));
        
var searchHistoryList = $("<div>").text(city).addClass("selected");
    $("#searchHistory").append(searchHistoryList);
    $("#searchInput").val("");
    getWeather(city);
    }
    
function searchHistory() {
    searchedCitiesArray = JSON.parse(localStorage.getItem("cities"));
    if (searchedCitiesArray == null) {
    searchedCitiesArray = [];
    }
    for (var i = 0; i < searchedCitiesArray.length; i++) {
        var displaySearchedCities = searchedCitiesArray[i];

        var searchHistoryList = $("<div>").text(displaySearchedCities).addClass("selected"); 
        $("#searchHistory").append(searchHistoryList);
        }
    }

var apiKey = "1ff0f6823d723403dabe8415bdcb12e3";
    function getWeather (city) {
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;
    
        $.ajax({
            url: queryURL,
            method: "GET",
            dataType: "jsonp",
            success: function(response){
                console.log(queryURL);
                console.log(response);
                    
                    function date_format(dt_string){
                        var date = new Date(dt_string.dt*1000);
                        return date.toDateString();
                    }
    
                    function temp_trans(input){
                        var temp =  "Temperature: " + ((input.main.temp- 273.15) * 1.80 + 32).toFixed(2) + " F ";
                        return temp;
                    }
            
                $("#previousSearches").empty();
                    var holder= response.list[0];
                            $(".currentCity").html("<h3>" + response.city.name + " " + date_format(holder) + "</h3>").append(
                                $('<img src=" '+ "http://openweathermap.org/img/wn/"+response.list[0].weather[0].icon+"@2x.png" +' "/>')); 
                            $(".humidity").text("Humidity: " + holder.main.humidity + " %");
                            $(".windSpeed").text("Wind Speed: " + holder.wind.speed + " mph");
                            $(".temperature").text(temp_trans(holder));
                            getUVindex(response.city.coord.lat, response.city.coord.lon);
    
                        for(i=1; i<=5; i++){
                        holder= response.list[(i*8)-1];
                      
                        $("#"+ i + "dayForecast").text(date_format(holder));
                        $("#"+ i + "dayIcon").empty().append($('<img src=" '+ "http://openweathermap.org/img/wn/"+holder.weather[0].icon+".png" +' "/>'));
                        $("#"+ i + "dayHumidity").text("Humidity: " + holder.main.humidity + " %");
                        $("#"+ i + "dayTemperature").text(temp_trans(holder));
    
                        }
                  }
            });           
    } 
    
    function getUVindex(lat,long) {  
                
        var queryURL = "https://api.openweathermap.org/data/2.5/onecall?" + "&lat=" + lat + "&lon=" + long + "&appid=" + apiKey;
    
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function(responseUVI) {
                console.log(responseUVI.current.uvi)
                var uvIndex = responseUVI.current.uvi;
                
                $("#uvIndex").text("UV Index: " + uvIndex);
                
                if (uvIndex <= 2.99) {                  
                    uvIndex = $("#uvIndex").css({"background-color": "olivedrab", "display": "block", "border-radius": "12px", "padding": "1.5%", "max-width": "20%"});
                } else if (uvIndex >= 3 & uvIndex <= 5.99) {
                    uvIndex = $("#uvIndex").css({"background-color": "gold", "display": "block", "border-radius": "12px", "padding": "1.5%", "max-width": "20%"});
                } else if (uvIndex >= 6 & uvIndex <= 7.99) {
                    uvIndex = $("#uvIndex").css({"background-color": "darkorange", "display": "block", "border-radius": "12px", "padding": "1.5%", "max-width": "20%"});
                } else if (uvIndex >= 8) {
                    uvIndex = $("#uvIndex").css({"background-color": "firebrick", "display": "block", "border-radius": "12px", "padding": "1.5%", "max-width": "20%"});
                };
            });
        } 
    getWeather("Los Angeles");
    }); 
    
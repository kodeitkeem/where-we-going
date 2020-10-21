
![Github Banner](https://raw.githubusercontent.com/kodeitkeem/where-we-going/master/img/Github-banner.png)

# Where We Going

## &#x1f4a1; Motivation
* I created this app because I think it would serve as a hepful little tool to get some basic information from about any country in the world prior to a vacation or trip. Instead of doing a google search it could potentially be the google for solely finding basic country information. Most travel apps out there only tell us about hotels and flights so for individual like me who are interested in things like population, and nationality, this would be dope!

## 	&#x1f511; Features 
* The purpose of this app is to allow a user to input a country they'd like to visit in the future or in general and get back some basic general information about that country.. and a random gif to go with the search tag &#x1f603;

## &#x1f4bb; Technologies
* ![](https://img.shields.io/badge/HTML5-informational?style=flat-square&logo=HTML5&logoColor=white&color=000000)
* ![](https://img.shields.io/badge/CSS3-informational?style=flat-square&logo=CSS3&logoColor=white&color=000000)
* ![](https://img.shields.io/badge/JavaScript-informational?style=flat-square&logo=JavaScript&logoColor=white&color=000000)
* ![](https://img.shields.io/badge/JQuery-informational?style=flat-square&logo=JQuery&logoColor=white&color=000000)
* ![](https://img.shields.io/badge/Bootstrap4-informational?style=flat-square&logo=Bootstrap&logoColor=white&color=000000)
* Web API's

## &#x1f680; Code Example
* This is the main block of code being executed, it fetches both the countries API and the GIPHY's API using AJAX. The API's then returns data that we use to populate the DOM. 

```javascript
        function getCountryData(evt){
            evt.preventDefault();
            userInput = $input.val();
            if(!userInput) return;

            $.ajax(GIPHY_URL + GIPHY_API_KEY + `&tag=${userInput}&rating=g`)
            .then(function(details){
                giphyGif = details;
                console.log(giphyGif.data.embed_url);
                $gif.attr('src', `${giphyGif.data.images.downsized_large.url}`);
            }, function(error){
                console.log('Its not working fam: ', error);
            })
            
            $.ajax(BASE_URL + userInput)
            .then(function(data){
                countryData = data;
                render();
                console.log(data);
            }, function(error){
                console.log('Its not working fam: ', error);
            })

        }
```

## &#x1f310; API's Used
* https://restcountries.eu/
* https://developers.giphy.com/docs/api/

## &#x2714; How To use the app?
* Simply enter the country you'd like to look up into the search box and click search

## &#x1f52e; Future Goals
* A user will have the ability to login and view countriess they've previously searched. 
* Users will get much more information returned to them such as popular cities, landmarks, tourist attractions etc...
* Implementation of the map location of the searched country 
* Making the app fully responsive

## &#x1f4d0; Wireframes
### Homepage
https://raw.githubusercontent.com/kodeitkeem/where-we-going/master/wireframes/header-section.png

### Modal-Popup
https://raw.githubusercontent.com/kodeitkeem/where-we-going/master/wireframes/Modal-Popup-Wireframe.png
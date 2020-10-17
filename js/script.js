//Constants
const BASE_URL = 'https://restcountries.eu/rest/v2/name/guyana';

//Variables
let countryData, userInput;

//Cached Elements References


//Event Listeners
//Functions
function getCountryData(){
    $.ajax(BASE_URL)
    .then(function(data){
        console.log(data);
    }, function(error){
        console.log('Its not working fam: ', error);
    })
}

getCountryData()
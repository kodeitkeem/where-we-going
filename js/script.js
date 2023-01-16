//Constants
const ACCESS_KEY = 'dbab01011ef3231e2c8e107c31ea0cbc';
const BASE_URL = 'https://api.countrylayer.com/v2/all?access_key=${ACCESS_KEY}';
const GIPHY_API_KEY = 'qCrrrix7pdCNfLBu86BLr3y6zyK8uLev';
const GIPHY_URL = 'https://api.giphy.com/v1/gifs/random?api_key=';

//Variables
let countryData, userInput, giphyGif;

//Cached Elements References
const $img1 = $('#img1');
const $img2 = $('#img2');
const $img3 = $('#img3');
const $body = $('body');
const $form = $('form');
const $input = $('input[type="text"]');
const $modal = $('#modal');
const $countryName = $('#country-name');
const $capital = $('#capital');
const $currencyName = $('#currency-name');
const $currencySymbol = $('#currency-symbol');
const $language = $('#language');
const $continent = $('#continent');
const $countryCode = $('#country-code');
const $callingCode = $('#calling-code');
const $nationality = $('#nationality');
const $population = $('#population');
const $borderingCountries = $('#bordering-countries');
const $flag = $('#country-flag');
const $gif = $('#random-gif');


//Event Listeners

$form.on('submit', getCountryData);
$img1.on('click', switchBackgroundOne);
$img2.on('click', switchBackgroundTwo);
$img3.on('click', switchBackgroundThree);

//Functions


function getCountryData(evt){
    evt.preventDefault();
    userInput = $input.val();
    if(!userInput) return;
    $.ajax(GIPHY_URL + GIPHY_API_KEY + `&tag=${userInput}&rating=g`)
    .then(function(details){
        giphyGif = details;
        $gif.attr('src', `${giphyGif.data.images.downsized_large.url}`);
    }, function(error){
        console.log('Its not working fam: ', error);
    })
    
    $.ajax(BASE_URL + userInput)
    .then(function(data){
        countryData = data;
        console.log(data);
        render();
    }, function(error){
        console.log('Its not working fam: ', error);
    })

}




function render(){
    
    $modal.modal();
    $countryName.text(`${countryData[0].name}`);
    $capital.text(`${countryData[0].capital}`);
    $currencyName.text(`${countryData[0].currencies[0].name}`);
    $currencySymbol.text(`${countryData[0].currencies[0].symbol}`);
    $language.text(`${countryData[0].languages[0].name}`);
    $continent.text(`${countryData[0].subregion}`);
    $countryCode.text(`${countryData[0].alpha3Code}`);
    $callingCode.text(`${countryData[0].callingCodes[0]}`);
    $nationality.text(`${countryData[0].demonym}`);
    $population.text(`${countryData[0].population}`);
    $borderingCountries.text(`${countryData[0].borders}`);
    $flag.attr('src', `${countryData[0].flag}`);
    $input.val('');
    

    // var map = L.map('mapid', {
    //     center: [countryData[0].latlng[0], countryData[0].latlng[1]],
    //     zoom: 5
    // }); 

    // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoiYWtlZW1kYWludHkiLCJhIjoiY2tnaG1nZGRrMWY2bzJxbGpybXhmcmQzZCJ9.cG79UU7d6nHWljY7Rn-_GA', {
    //     attribution: '',
    //     maxZoom: 18,
    //     id: 'mapbox/streets-v11',
    //     tileSize: 512,
    //     zoomOffset: -1,
    //     accessToken: 'sk.eyJ1IjoiYWtlZW1kYWludHkiLCJhIjoiY2tnaG1nZGRrMWY2bzJxbGpybXhmcmQzZCJ9.cG79UU7d6nHWljY7Rn-_GA'
    // }).addTo(map);

    
}

function switchBackgroundOne(){
    $body.css({"background": `linear-gradient(rgba(43, 43, 43, 0.7), rgba(102, 102, 102, 0.7)), url("/img/road.jpeg")`,
    "background-blend-mode": "darken",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover"
                });
}

function switchBackgroundTwo(){
    $body.css({"background": `linear-gradient(rgba(43, 43, 43, 0.7), rgba(102, 102, 102, 0.7)), url("/img/miami.jpeg")`,
    "background-blend-mode": "darken",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover"
                });
}

function switchBackgroundThree(){
    $body.css({"background": `linear-gradient(rgba(43, 43, 43, 0.7), rgba(102, 102, 102, 0.7)), url("/img/rhyno.jpeg")`,
    "background-blend-mode": "darken",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover"
                });
}



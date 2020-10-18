//Constants
const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

//Variables
let countryData, userInput;

//Cached Elements References
const $img1 = $('#img1');
const $img2 = $('#img2');
const $img3 = $('#img3');
const $body = $('body');
const $form = $('form');
const $input = $('input[type="text"]');
const $modal = $('#modal');

//Event Listeners
$img1.hover(switchBackgroundOne);
$img2.hover(switchBackgroundTwo);
$img3.hover(switchBackgroundThree);
$form.on('submit', getCountryData);

//Functions


function getCountryData(evt){
    evt.preventDefault();
    userInput = $input.val();
    if(!userInput) return;

    $.ajax(BASE_URL + userInput)
    .then(function(data){
        countryData = data;
        render();
        console.log(data);
    }, function(error){
        console.log('Its not working fam: ', error);
    })
}

function render(){
    $modal.modal();
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


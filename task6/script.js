const trafficLightGreen = document.querySelector('#trafficLightGreen');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightRed = document.querySelector('#trafficLightRed');
const allTtrafficLight = document.querySelector('#everybody');

//ранее использовал такой подход
// function makeBlackAll () {
//     trafficLightGreen.style.background = '';
//     trafficLightYellow.style.background = '';
//     trafficLightRed.style.background = '';
// }

function makeGreen() {
trafficLightGreen.style.background = ('green');
trafficLightYellow .style.background = ('black');
trafficLightRed.style.background = ('black');
allTtrafficLight.removeEventListener('click', makeGreen);
allTtrafficLight.addEventListener('click',makeYellow);
}

function makeYellow() {
   trafficLightYellow.style.background = ('yellow');
   trafficLightGreen.style.background = ('black');
   trafficLightRed.style.background = ('black');
   allTtrafficLight.removeEventListener('click', makeYellow);
   allTtrafficLight.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightRed.style.background = ('red');
    trafficLightYellow.style.background = ('black');
    trafficLightGreen.style.background = ('black');
    allTtrafficLight.removeEventListener('click', makeRed);
    allTtrafficLight.addEventListener('click', makeGreen);
}

allTtrafficLight.addEventListener('click', makeGreen);
const trafficLightGreen = document.querySelector('#trafficLightGreen');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightRed = document.querySelector('#trafficLightRed');

function makeBlackAll () {
    trafficLightGreen.style.background = '';
    trafficLightYellow.style.background = '';
    trafficLightRed.style.background = '';
};

function makeGreen() {
    if (trafficLightGreen.style.background === 'green' ||
trafficLightRed.style.background === ''&& 
trafficLightYellow.style.background === ''&& 
trafficLightGreen.style.background === '')
{
trafficLightGreen.style.background = 'green';
trafficLightGreen.addEventListener('click', makeBlackAll);
// trafficLightGreen.removeEventListener('click', makeGreen);
trafficLightGreen.addEventListener('click', makeYellow);
}

if (trafficLightYellow.style.background === 'yellow' &&
 trafficLightYellow.style.background === '' &&
 trafficLightRed.style.background === '')
 {
    trafficLightYellow.addEventListener('click', makeYellow);
}

if (trafficLightRed.style.background === 'red' &&
trafficLightYellow.style.background === '' &&
trafficLightGreen.style.background === '')
{
    trafficLightYellow.addEventListener('click', makeRed);
}
else 
{
trafficLightGreen.addEventListener('click', makeBlackAll);
trafficLightGreen.style.background = 'green';
trafficLightGreen.addEventListener('click', makeYellow);
}
}

function makeYellow() {
    trafficLightYellow.style.background = 'yellow';
   trafficLightYellow.addEventListener('click', makeBlackAll);
//    trafficLightYellow.removeEventListener('click', makeYellow);
   trafficLightYellow.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightRed.style.background = 'red';
    trafficLightRed.addEventListener('click', makeBlackAll);
    trafficLightRed.addEventListener('click', makeGreen);
}


trafficLightGreen.addEventListener('click', makeGreen);



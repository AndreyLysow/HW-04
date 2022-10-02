
const trafficLight = document.querySelector('#trafficLight');

function makeGreen1() {
    trafficLight.style.background = ('green');
    trafficLight.removeEventListener('click', makeGreen1);
    trafficLight.addEventListener('click', makeYellow1);
}


function makeYellow1() {
    trafficLight.style.background = ('yellow');
    trafficLight.removeEventListener('click', makeYellow1);
    trafficLight.addEventListener('click', makeRed1);
}


function makeRed1() {
    trafficLight.style.background = ('red');
    trafficLight.removeEventListener('click', makeRed1);
    trafficLight.addEventListener('click', makeGreen1);
}

trafficLight.addEventListener('click', makeGreen1);


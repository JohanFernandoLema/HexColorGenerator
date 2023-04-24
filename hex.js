//Create an array with more data types in order to get unique colors in our hex page
const hex = [0, 1, 3, 4, 5,6,7,8,9,"A", "B","C","D","E","F"]

//Same process as in the app.js (target button)
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){

let hexHue = '#';
    //For loop that will repeat 6 times in order to get a randomly hexHue
    for(let i = 0; i<6; i++){
        hexHue += hex[getRandomNumber()]
    }
    color.textContent =hexHue;
    document.body.style.backgroundColor = hexHue;
});

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length)
}
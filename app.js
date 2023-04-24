//Colors array generated
const colors = ["green", "red", "rgba(133,122,200)","#f15025"];

//1.- Targetting button in order to get access to them
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//2.-Create a callback anonymous function that will target our button, so everytime we click the button the bg color will be modified.
btn.addEventListener('click', function(){
    //Target the body using the style property (background-color in CSS)

    const randomNumber = getRandomNumber();
    
    console.log(getRandomNumber);
    //Get the body of our index.html using the document property and selecting the body and styling its bg to our random number from our colors array.
    document.body.style.backgroundColor = colors[randomNumber];

    //targetting our color binding and modifying its value by the color the body was changed
    color.textContent = colors[randomNumber];

});

//Funtion to generate a random number and use it in our callBack function. 
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}
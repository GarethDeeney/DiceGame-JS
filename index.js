// jshint esversion: 6

var randomNumber1 = Math.floor(Math.random()*6)+1;
var image1 = document.querySelector('.img1');
image1.setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random()*6)+1;
var image2 = document.querySelector('.img2');
image2.setAttribute("src","images/dice"+randomNumber2+".png");

var heading = document.querySelector('h1');

if(randomNumber1 > randomNumber2){
  heading.innerHTML = "Player 1 Wins!";
} else if( randomNumber1 == randomNumber2){
  heading.innerHTML = "It's a Draw!";
} else{
  heading.innerHTML = "Player 2 Wins!";
}

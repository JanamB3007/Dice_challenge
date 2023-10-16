// var randomNumber1 = Math.random();
// randomNumber1 = randomNumber1*7;
// randomNumber1 = Math.floor(randomNumber1)+1;
// console.log(randomNumber1);

// Enter players Name

var player1Name = prompt("enter palyer 1 name");
var player2name = prompt("enter player 2 name");

//change player name from player 1 and player 2 to enterd name

document.querySelectorAll("p")[0].innerHTML = player1Name;
document.querySelectorAll("p")[1].innerHTML = player2name
                     
//this is for dice 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //Dice1.png to Dice2.png

var randomImageSource1 = "images/" + randomDiceImage; // iamges/Dice1.png to images/Dice2.png

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

//this is for Dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// Now for who win the Game

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = player1Name + "Win 🚩";
}

else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 Win 🚩";
}

else{
    document.querySelector("h1").innerHTML = "Draw!!";
}


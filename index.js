/*var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" +  randomNumber1 + ".png"; //dice1.png-dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png-images/dice6.png

//var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);
document.querySelectorAll("img")[0].setAttribute("src"), randomImageSource1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //coverting line 3 and 5 to a single line

document.querySelectorAll("img")[1].setAttribute("src"), randomImageSource2);*/

// Create 2 varibles for random numbers from 1 to 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Select the classes for the images
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")

// Compare both img variables to each other and set the attributes
// to access file and generate the random numbers to change actual file.
let player1 = img1.setAttribute("src", "images/dice" + randomNumber1 + ".png")
let player2 = img2.setAttribute("src", "images/dice" + randomNumber2 + ".png")

// Select h1 and chage winner of the game
let winner = document.querySelector("h1")


// Compare the randomNumber varibles and change to
// Player 1 Wins! || Player 2 Wins! || Draw!
if (randomNumber1 > randomNumber2) {
    winner.innerHTML = "Player 1 Wins"
} else if (randomNumber1 < randomNumber2) {
    winner.innerHTML = "Player 2 Wins!"
} else {
    winner.innerHTML = "Draw!"
}

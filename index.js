// Random number between 1-6
var images = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];

var randomNumber1 = Math.floor(Math.random() * 5 + 1);
var randomNumber2 = Math.floor(Math.random() * 5 + 1);

document.getElementById("img1").src =
  "images/" + images[randomNumber1] + ".png";
document.getElementById("img2").src =
  "images/" + images[randomNumber2] + ".png";

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🥳 Player 1 wins !";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🥳 Player 2 wins !";
} else {
  document.querySelector("h1").innerHTML = "😅 DRAW !";
}

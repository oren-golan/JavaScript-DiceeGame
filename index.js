/*=========================================================================================*/
            /*================ generating dice1 random number ======*/
/*=========================================================================================*/

var randomNumber1 = Math.floor(Math.random() * 6)+1; //getting a random number between 1-6

var randomDiceImage = "dice" + randomNumber1+".png"; // Combine the random number from randomNumber1 and create the string name of our image.

var randomImageSource = "images/"+randomDiceImage; // create a path to the random image

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

/*=========================================================================================*/
            /*================ generating dice2 random number ======*/
/*=========================================================================================*/

var randomNumber2 = Math.floor(Math.random() * 6)+1; //getting a random number between 1-6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

/*=========================================================================================*/
/*=========================================================================================*/

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = " 🏆🏆 Player 1 Wins! ";
}
else if (randomNumber1 < randomNumber2){
   document.querySelector("h1").innerHTML = " Player 2 Wins! 🏆🏆";
}
else {
  document.querySelector("h1").innerHTML = " 👬 Draw! 👬";
}

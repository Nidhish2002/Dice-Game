var randomNumber1 = Math.floor(Math.random()*6)+1;// random number generator

var randomDiceImage = "images/dice"+randomNumber1+".png"; // String to select the dice1 img.

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;// random number generator

var randomDiceImage1 = "images/dice"+randomNumber2+".png"; // String to select the dice2 img.

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage1);

if(randomNumber1>randomNumber2){
document.write("<h2>Player1 is Winner</h2>")
}else if(randomNumber1==randomNumber2)
{
    document.write("<h2>Try Again(tie)</h2>")
}else{
document.write("<h2>Player2 is Winner</h2>")
}
// console.log(randomNumber1+" "+randomNumber2)
// if(randomNumber1>randomNumber2){
//     alert("Player1 is Winner.");
// }else if(randomNumber1==randomNumber2){
//     alert("Its a tie.");
// }else{
//     alert("Player2 is Winner.");
// }
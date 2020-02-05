
function firstDice(){
  var audio1=new Audio('player1.mp3');
  var audio2=new Audio('player2.mp3');
    var audio3=new Audio('draw.mp3');


  var randomnumber1=Math.floor(Math.random()*6)+1;
  var randomimage="images/"+"dice"+randomnumber1+".png";

  document.querySelectorAll(".img1")[0].setAttribute("src",randomimage);
  var randomnumber2=Math.floor(Math.random()*6)+1;
  var randomimage2="images/"+"dicee"+randomnumber2+".png";

  document.querySelectorAll(".img2")[0].setAttribute("src",randomimage2);

if(randomnumber1>randomnumber2)
{
  document.querySelector("#play").innerHTML="player1 win🚩";
  audio1.play();
}

else if (randomnumber1<randomnumber2)
{
  document.querySelector("#play").innerHTML="player2      win🚩";
  audio2.play();
}

  else
  {
    document.querySelector("#play").innerHTML="player1     win🚩";
    audio3.play();
  }






}

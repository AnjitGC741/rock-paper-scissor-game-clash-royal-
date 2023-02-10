// alert(computerValue);
var playerName=null;
var gamePoint=null;
var computerScore = 0;
var humanScore = 0;
var presentComputerImg = null;
var presentHumanImg = null;
var previousHumanImg = null;

//for popupbox
const inputValue=document.getElementsByTagName("input");
for(var i=0;i<=1;i++)
{
inputValue[i].addEventListener('input',function()  {
           if(inputValue[0].value.length > 0 && inputValue[1].value.length > 0)
           {
            document.getElementById("popupBox-btn").style.backgroundColor="#157347";
           }
           else{
            document.getElementById("popupBox-btn").style.backgroundColor="#5C636A";
           }
});
}

document.querySelector(".popupBox-btn").addEventListener('click',function(){
  if(inputValue[0].value.length > 0 && inputValue[1].value.length > 0)
           {
            playerName=document.getElementById("player-name").value
            gamePoint=document.getElementById("game-point").value
            document.querySelector(".popup-box").classList.add("hidden");
            document.querySelector(".overlay").classList.add("hidden");
            document.getElementById("playerName").innerHTML=playerName;
            event.preventDefault();
           }
           else{
            
            event.preventDefault();
           }
});
document.querySelector(".btn-setting").addEventListener('click',function(){
  document.querySelector(".popup-box").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
   document.getElementById("popupBox-btn").style.backgroundColor="#FFCA2C";
  document.getElementById("player-name").value = playerName;
  document.getElementById("game-point").value = gamePoint;
  for(var i=0;i<=1;i++)
    {
          inputValue[i].addEventListener('input',function()  {
           if(inputValue[0].value.length > 0 && inputValue[1].value.length > 0)
           {
            document.getElementById("popupBox-btn").style.backgroundColor="#FFCA2C";
           }
           else{
            document.getElementById("popupBox-btn").style.backgroundColor="#5C636A";
           }
    });
    }


});
function displayBox()
{
  
  document.querySelector(".popup-box").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
}

function rock() {
  if(presentHumanImg !== null)
  {
    document.querySelector(".human-"+presentHumanImg).classList.add("hidden");
    document.querySelector(".before-"+presentHumanImg).classList.add("hidden");
  }
  presentHumanImg = "rock";
  if(presentComputerImg !== null)
  {
    document.querySelector(".computer-"+presentComputerImg).classList.add("hidden");
  }
  document.querySelector(".human-"+presentHumanImg).classList.remove("hidden");
  previousHumanImg = "rock";
  var computerValue = generateComputerValue();
  presentComputerImg=computerValue;
  document.querySelector(".computer-"+computerValue).classList.remove("hidden");
  if (computerValue == "rock") {
     
  } else if (computerValue == "scissor") {
    humanScore++;
    document.getElementById("humanPoint").innerHTML = humanScore;
  } else {
    computerScore++;
    document.getElementById("computerPoint").innerHTML = computerScore;
  }
  document.querySelector(".before-"+previousHumanImg).classList.remove("hidden");
  gameOverCheck(humanScore,computerScore);
}
 function scissor()
 {
  if(presentHumanImg !== null)
  {
    document.querySelector(".human-"+presentHumanImg).classList.add("hidden");
    document.querySelector(".before-"+presentHumanImg).classList.add("hidden");
  }
  presentHumanImg = "scissor";
  if(presentComputerImg !== null)
  {
    document.querySelector(".computer-"+presentComputerImg).classList.add("hidden");
  }
  document.querySelector(".human-"+presentHumanImg).classList.remove("hidden");
  previousHumanImg = "scissor";
  var computerValue = generateComputerValue();
  presentComputerImg=computerValue;
  document.querySelector(".computer-"+computerValue).classList.remove("hidden");
    // document.getElementById("computer-value").innerHTML = computerValue;
    if (computerValue == "rock") {
      computerScore++;
      document.getElementById("computerPoint").innerHTML = computerScore;
    } else if (computerValue == "scissor") {
     
    } else {
      humanScore++;
    document.getElementById("humanPoint").innerHTML = humanScore;
    }
    document.querySelector(".before-"+previousHumanImg).classList.remove("hidden");
 }
 function paper()
 {
    if(presentHumanImg !== null)
    {
      document.querySelector(".human-"+presentHumanImg).classList.add("hidden");
      document.querySelector(".before-"+presentHumanImg).classList.add("hidden");
    }
    presentHumanImg = "paper";
    if(presentComputerImg !== null)
    {
      document.querySelector(".computer-"+presentComputerImg).classList.add("hidden");
    }
    document.querySelector(".human-"+presentHumanImg).classList.remove("hidden");
    previousHumanImg = "paper";
    var computerValue = generateComputerValue();
    presentComputerImg=computerValue;
    document.querySelector(".computer-"+computerValue).classList.remove("hidden");
    if (computerValue == "rock") {
      humanScore++;
      document.getElementById("humanPoint").innerHTML = humanScore;
    } else if (computerValue == "scissor") {
      computerScore++;
      document.getElementById("computerPoint").innerHTML = computerScore;
    } else {
      
    } 
    document.querySelector(".before-"+previousHumanImg).classList.remove("hidden");
 }
 function restart()
 {
computerScore = 0;
humanScore = 0;
document.getElementById("computerPoint").innerHTML = computerScore;
document.getElementById("humanPoint").innerHTML = humanScore;
 }
 function generateComputerValue(){
  const elements = ["paper", "scissor", "rock"];
  var value = Math.random() * 3;
   var index= Math.floor(value);
   return elements[index];
 }
 function gameOverCheck(x,y)
 {
    if(x == gamePoint)
    {
      document.getElementById("result").innerHTML="You won";
    }
    else if(y == gamePoint)
    {
      document.getElementById("result").innerHTML="You loose";
    }
   
 }

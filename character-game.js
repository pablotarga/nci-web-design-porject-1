var playGame = document.getElementById("game-button");





function goToGame(){

var yesNo = confirm("Do you want to play a game?");
var person;
var personID;
var weapon;

if (yesNo == true){
	alert("In a time when dragons ruled the world...");
  
  alert("Two heroes rose to challenge their might.");
  
  var characterChoice = prompt("You can play as Diana the Scholar [enter 1] or Assassin-Bob [enter 2].");
  
  if (characterChoice == 1){
  alert("You are the learned scholar Diana, a traveller from a hidden island of warrior women.");
  person = "Diana";
  personID = 1;
  }
  else if(characterChoice == 2){
  alert("You are the brave but ill assassin known only as Assassin-Bob, who relies on caffeine to drive away his personal demons.");
  person = "Assassin-Bob";
  personID = 2;
  }
  else{
  alert("Oops. If you're neither Diana nor Bob, then you must be a dragon.")
  person = "dragon";
  personID = 3;
  }
  
}
else if (yesNo == false){
	alert("Okay.");
} 

if (personID==1 || personID ==2){
  alert("Hello," + person +"! You may choose a weapon to carry on your quest.")
  weapon = prompt("What weapon do you take with you? 1: a sword; 2: a spear; 3: your doctoral thesis; 4: a jar of strong coffee.")
    if (prompt == 1 || prompt == 2){
      alert("Have fun storming the castle!")
      alert("Goodbye now! The game is over.")
    }
    else if(prompt==3){
      alert("You toiled long and hard in the dark reaches of Moria to understand the mysteries of the flame. You could not bring yourself to leave the results of your research behind.");
      alert("Goodbye now! The game is over.");
    }
  else if (prompt==4){
    alert("If you never sleep again, the demons won't be able to eat your soul.")
    alert("Goodbye now! The game is over.")
  }
  else{
    alert("Wiser still is the one without weapons. As the koan says, \"Not the wind, not the flag: mind is moving.\"")
    alert("Goodbye now. The game is over.")
  }
}

else{
  alert("Hello, mighty dragon overlord! Please don't burn us all to a crisp!")
  var crispy = confirm("Do you burn us all to a crisp?")
  if (crispy==true){
    alert("*tortured screaming")
    alert("GAME OVER")
  }
  else{
    alert("Thank you. Goodbye now.")
  }
}

}

playGame.addEventListener("click", function(){goToGame()});
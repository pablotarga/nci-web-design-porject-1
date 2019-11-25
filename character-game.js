/* text game

principal author @Liz Bourke
*/


var playGame = document.getElementById("game-button");





function goToGame(){

var yesNo = confirm("Do you want to play a game?");
var person;
var personID;
var weapon;
var risk = 0;

if (yesNo == true){
	alert("In a time when dragons ruled the world...");
  
  alert("Two heroes rose to challenge their might.");
  
  var characterChoice = prompt("You can play as Diana the Scholar [enter 1] or Assassin-Bob [enter 2].");
  
  if (characterChoice == 1){
  alert("You are the learned scholar Diana, a traveller from a hidden island of warrior women.");
  person = "Diana";
  personID = 1
  risk = 2;
  }
  else if(characterChoice == 2){
  alert("You are the brave but ill assassin known only as Assassin-Bob, who relies on caffeine to drive away his personal demons.");
  person = "Assassin-Bob";
  personID = 2
  risk = 2;
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
    if (weapon == 1 || weapon == 2){
      alert("Have fun storming the castle!");
      if (weapon == 1){
        weapon = " sword "
        risk = risk - 1}
      else if(weapon == 2){
        weapon = " spear "
        risk = risk - 1}
    }
    else if (weapon == 3){
      alert("You toiled long and hard in the dark reaches of Moria to understand the mysteries of the flame.")
      alert("You could not bring yourself to leave the results of your research behind.");
      weapon = " forbidden knowledge "
      risk = risk + 3;
    }
  else if (weapon == 4){
    alert("If you never sleep again, the demons won't be able to eat your soul.");
    weapon = " sovereign remedy against sleep "
    risk = risk +1;
  }
  else {
    alert("Wiser still is the one without weapons. As the koan says, \"Not the wind, not the flag: mind is moving.\"")
    weapon = " empty hands "
    risk = risk + 5;
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

if (personID == 1 || personID == 2){
    alert("With your" + weapon + "you mount the Peak of Lightning to challenge the Immortal Guardian.")

    var bonus = Math.floor((Math.random() * 5) + 1);
    risk = risk + bonus;

    if (risk < 5){
        alert("The lightning that crackles from the rocks is too much for your insulated boots to take. You scream, fleeing back down the mountain to escape electrocution.")
        alert("GAME OVER")
    }
    else if(risk > 5 && risk < 7){
      alert("The lightning crackles from the rocks, but you are prepared for this.")
      alert("But you're not prepared for the Immortal Guardian. Despite your" + weapon + " and your best efforts, you cannot prevail.")
      alert("After a brief struggle, the Guardian strikes you down and casts you from the mountain.")
      alert("GAME OVER");
        }
    else{
      alert("The lightning crackles from the rocks, but you are prepared for this.")
      alert("You prepared for years to face the Immortal Guardian. With your" + weapon + "you enter battle.")
      alert("The Immortal Guardian is a mighty foe. The battle lasts for hours.")
      alert("At last, exhausted, you prevail.")
      alert("Victory is yours, " + person + ". Congratulations! You have saved the world.")
    }

}


}

playGame.addEventListener("click", function(){goToGame()});
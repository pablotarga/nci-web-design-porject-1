var janeOne = document.getElementById("jane-episode-one");
var janeTwo = document.getElementById("jane-episode-two");

var playOne = document.getElementById("diana-clip");
var playTwo = document.getElementById("bob-clip");
 
playOne.addEventListener("click", function(){ janeOne.play(); });
playTwo.addEventListener("click", function(){ janeTwo.play(); });
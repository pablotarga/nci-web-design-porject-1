$.getJSON( "testarray.jscallback=?", function( json ) {
  console.log( "JSON Data: " + json.eventLocations[ 3 ]);
 });
let regenButton = document.getElementById("regen-button");
let counter = document.getElementById("regen-iterations");
let para = document.querySelector("h1");
regenButton.onclick = function() {


	let iterations = counter.value -1;
	var textHolder = "";
	for (i = 0; i <= iterations; i++) {
		textHolder = textHolder + eventArray[i];
	}
	para.textContent = textHolder
}

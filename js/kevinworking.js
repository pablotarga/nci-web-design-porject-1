var picker = new Pikaday({ field: $('#datepicker')[0] });
var eventArray = [];
$.getJSON('js/data.json', function (obj) {
    eventArray = obj.eventList;
});

let regenButton = document.getElementById('regen-button');
let counter = document.getElementById('datepicker');
let listElement = document.getElementById('events-html');
regenButton.onclick = function() {


    let userDate = Date.parse(counter.value);
    var textHolder = '';
    for (i = 0; i < eventArray.length; i++) {
		if (userDate <= Date.parse(eventArray[i].eventDate)) {
			textHolder += '<li class="event"><h2>';
			textHolder += eventArray[i].shortEventLocation;
			textHolder += '<br>';
			textHolder += eventArray[i].eventDate;
			textHolder += '</h2><div class="event-poster"><img src="';
			textHolder += eventArray[i].posterURL;
			textHolder += '" alt="" /></div><h3>';
			textHolder = textHolder + eventArray[i].eventName;
			textHolder += '</h3><address>';
			textHolder += eventArray[i].longEventLocation;
			textHolder += '</address><p><a href="';
			textHolder += eventArray[i].externalEventLink;
			textHolder += '">Find out more</a></p></li>';
		}
    }
    listElement.innerHTML = textHolder;
}






/*
$.ajax({
	url: 'array.json',
	success: function(){
			console.log('success', arguments);
		},
	fail: function(){
		console.log("test", arguments)}


	})
	*/
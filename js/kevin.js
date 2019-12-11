let listElement = document.getElementById('events-html');
let dateWidget = document.getElementById('datepicker');
var eventArray = [];
$.getJSON('js/data.json', function (obj) {
    eventArray = obj.eventList;
    console.log("Loaded JSON");
    //buildDatePicker goes here so that events are loaded before the date picker is initialised at today's date,
    //so that when the date picker's initialisation's setDate triggers a 'change' event in the original
    //field, the resulting call to regenerate will have data to work with... i.e. the page
    //shows events from today's date on load
    buildDatePicker();
});
//Want to use jqHXR to have a fail method

function buildDatePicker() {
	console.log("Called date stuff");
	dateWidget.addEventListener('change', regenerate);
	var picker = new Pikaday({ field: $('#datepicker')[0], defaultDate: new Date(), setDefaultDate: true });
}

function regenerate(e) {
	let userDate = Date.parse(dateWidget.value);
	console.log("eventArray.length is: " + eventArray.length);
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
			listElement.innerHTML = textHolder;
		}
	}
}
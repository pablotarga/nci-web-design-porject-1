let listElement = document.getElementById('events-html');
let dateWidget = document.getElementById('datepicker');
var eventArray = [];
$.getJSON('js/data_un.json', function (obj) {
    eventArray = obj.eventList;
    console.log("Loaded JSON");

    //sorting: outer loop moves the *starting point* of the inner loop
    //which traverses seeking the smallest member, which, if it isn't
    //there already, is swapped with the *first member of this traversal*
    //i.e. the member indexed by the outer loop

    for (i = 0; i < eventArray.length; i++) {
		let earliestDateFound = Date.parse("2100-01-01");
		for (j = i; j < eventArray.length; j++) {
			let eventDate = Date.parse(eventArray[j].eventDate);
			if (eventDate < earliestDateFound) {
				positionOfEarliest = j;
				earliestDateFound = eventDate;
			}
		}
		//if the earliest event found in this traversal wasn't already
		//at the start of the traversal (i), swap it with the event
		//at the start
		if (positionOfEarliest != i) {
			console.log("Swapped event at" + i + " with event at " + positionOfEarliest);
			tempEventObj = eventArray[i];
			eventArray[i] = eventArray[positionOfEarliest];
			eventArray[positionOfEarliest] = tempEventObj;
		}
	}

	console.log("eventArray.length is (before calling Pikaday) " + eventArray.length);
    //buildDatePicker goes here so that events are loaded before the date picker is initialised,
    //so that when the date picker's initialisation's setDate triggers a 'change' event in the original
    //text field, the resulting call to regenerate(e) will have data to work with... so that the page
    //shows events from today's date on load without needing the user to select a date
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
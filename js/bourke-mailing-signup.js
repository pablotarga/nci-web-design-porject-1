alert('adam');

var displaySignUp = function(event){
    event.preventDefault();
    debugger
    alert("Your message has been submitted.");
}

document.getElementById("submit").addEventListener("submit", displaySignUp);
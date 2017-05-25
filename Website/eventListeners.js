// JavaScript Document
document.forms.signupForm.addEventListener("change", function(e){ //add event listener to the form
	"use strict";
	if(e.target.name === "mType"){ //change the membership cost based on membership type
		var fee = document.getElementById("mCost");
		if(e.target.value === "family"){
			document.getElementById("familyMembership").className = "";
			fee.innerHTML = "$60";
		} else {
			document.getElementById("familyMembership").className = "hidden";
			if(e.target.value === "adult"){
				fee.innerHTML = "$30";
			} else {
				fee.innerHTML = "$15";
			}
		}
	}
	if(e.target.name === "role"){ //show or hide extra form controls based on the selects value
		if(e.target.value === "playing"){
			document.getElementById("playerSignup").className = "";
			document.getElementById("conductorSignup").className = "hidden";
		} else if (e.target.value === "conducting") {
			document.getElementById("conductorSignup").className = "";
			document.getElementById("playerSignup").className = "hidden";
		}else {
			document.getElementById("playerSignup").className = "hidden";
			document.getElementById("conductorSignup").className = "hidden";
		}
  }
});

document.forms.signupForm.addEventListener("focus", function(e){
	"use strict";
	e.target.classList.remove("error");
}, true); //catch the bubbling

document.forms.signupForm.addEventListener("blur", function(e){
	"use strict";
	try { //try to modify error span regardless of what part of the form is calling the event
		document.getElementById(e.target.name+"Error").innerHTML = "";
	} catch(exception) { //catch the ReferenceError that may occur
		try { //let's try this again...
			document.getElementById(e.target.parentElement.parentElement.id+"Error").innerHTML = ""; //we're specifically looking for the child[number]Error span here
		} catch(exceptioner) { //exception 2: exception harder
			//do absolutely nothing
		}
	}
}, true); //gotta catch 'em all
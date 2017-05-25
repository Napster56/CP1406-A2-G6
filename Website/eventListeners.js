// JavaScript Document
document.forms.signupForm.addEventListener("change", function(e) {
	"use strict";
	if(e.target.name === "mType") {
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
	if(e.target.name === "role") {
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


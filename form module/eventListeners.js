// JavaScript Document
document.forms.signupForm.addEventListener("change", function(e) {
	if(e.target.name === "mType") {
		if(e.target.value === "family"){
			document.getElementById("familyMembership").className = "";
		} else {
			document.getElementById("familyMembership").className = "hidden";
		}
	}
	if(e.target.name === "role") {
		if(e.target.value === "playing"){
			document.getElementById("playerSignup").className = "";
		} else {
			document.getElementById("playerSignup").className = "hidden";
		}
  }
});


// JavaScript Document
var childrenNum = 3; //number of children visible

//helper function to show proper number of fields
function showChildren(){
	var i;
	for(i=1; i<=10; i++){
		var divID = "child" + i;
		if(i <= childrenNum){
			document.getElementById(divID).className = "";
		} else {
			document.getElementById(divID).className = "hidden";
		}
	}
}

//show one more field up to 10
function addChild(){
	childrenNum = Math.min(childrenNum+1,10);
	showChildren();
}

//show one less field, minimum 0
function remChild(){
	childrenNum = Math.max(childrenNum-1,1);
	showChildren();
}

//tests if user input is a number
function isNum(txt) {  
	"use strict";
	var numV = /^\d+$/;
	if(numV.test(txt)) {
		return "";
	} else {
		return "Please use only numeric characters for ";
	}
}

//tests if user input is text
function isText(txt) {  
	"use strict";
	var numV = /^[a-z][A-Z]+$/;
	if(numV.test(txt)) {
		return "";
	} else {
		return "Please use only numeric characters for ";
	}
}

//test if user input is a date
function isDate(txt) {
	"use strict";
	var dateV = /^(\d|\/)+$/;
	if(dateV.test(txt)) {
		var firstSlash = txt.indexOf("/");
		var lastSlash = txt.lastIndexOf("/");
		alert((txt.match(/\//g)||[]).length);
		if((firstSlash > 0 && firstSlash < 3) && (lastSlash > firstSlash+1 && lastSlash <= firstSlash+3) && (txt.match(/\//g).length === 2) && (txt.length >= 6 && txt.length <= 10)){
			return "";
		}
	}
	return "Please enter a date for the DOB of ";
}

//Function to validate user input for membership sign up
function validateForm(form) {
	"use strict";
	var errorMessage = "";
	var email = form.email.value;
	if(email.length < 1){ //string is not empty
		errorMessage += "Please enter an email.\n";
	} else { //string is an email, or at least formatted like one
		var atPosition = email.indexOf("@");
		var dotPosition = email.lastIndexOf(".");
		if (atPosition<1 || dotPosition<atPosition+2 || dotPosition+2>=email.length) {
			errorMessage += "Email not valid.\n";
		}
	}
	
	var password = form.pass.value;
	var passwordValid = form.passValidate.value;	
	if(password.length < 1) { //string is not empty
		errorMessage += "Please enter a password.\n";
	}
	else if(password !== passwordValid) { //do passwords match?
		errorMessage += "Passwords don't match.\n";
	}
	
	var title = form.title.value;
	if(title.length < 1) { //string is not empty
		errorMessage += "Please enter a title.\n";
	}
	
	var family = form.familyName.value;
	var given = form.givenName.value;
	if(family.length < 1) { //string is not empty
		errorMessage += "Please enter a family name.\n";
	}
	if(given.length < 1) { //string is not empty
		errorMessage += "Please enter a given name.\n";
	}
	
	if(document.getElementById("familyMembership").className === ""){
		//validate children
		var i = 0;
		for(i=1; i<=10; i++){
			var divID = "child" + i;
			var nameID;
			var dateID;
			if(document.getElementById(divID).className === ""){
				nameID = "childName" + i;
				dateID = "childDOB" + i;
				var childName = eval("form."+nameID+".value");
				var childDOB = eval("form."+dateID+".value");
				if(childName === ""){ //string is not empty
					errorMessage += "Please enter a name for child " + i + ".\n";
				} else if(childDOB === "") { //string is not empty
					errorMessage += "Please enter a date of birth for" + childName + ".\n";
				} else { //checks that DOB is in the format of a date
					var DOBValid = isDate(childDOB);
					if(DOBValid !== ""){
						errorMessage += DOBValid + childName + ".\n";
					}
				}
			}
		}
	}
	
	var address = form.address.value;
	if(address.length < 1) { //string is not empty
		errorMessage += "Please enter an address.\n";
	}
	
	var phone = form.phone.value;
	var phoneValid = isNum(phone); //check if phone number is just digits
	var mobile = form.mobile.value;
	var mobileValid = isNum(mobile); //check if mobile number is just digits
	if(phone.length < 1) { //string is not empty
		errorMessage += "Please enter a phone number.\n";
	} else if (phoneValid !== ""){ //string is not empty
		errorMessage += phoneValid + "your phone number.\n";
	}
	if(mobile.length < 1) { //string is not empty
		errorMessage += "Please enter a mobile phone number.\n";
	} else if (mobileValid !== ""){ //string is not empty
		errorMessage += mobileValid + "your mobile number.\n";
	}
	
	if(document.getElementById("playerSignup").className === ""){
		var instruments = form.instruments.value;
		var qual = form.qualifications.value;
		var exp = form.experience.value;
		if(instruments.length < 1) { //string is not empty
			errorMessage += "Please enter the instruments you can play.\n";
		}
		if(qual.length < 1) { //string is not empty
			errorMessage += "Please enter your qualifications.\n";
		}
		if(exp.length < 1) { //string is not empty
			errorMessage += "Please give us a short blurb of your experience.\n";
		}
	}
	
	if(document.getElementById("conductorSignup").className === ""){
		var CV = form.resume;
		if(!CV.files.length){ //file is selected
			errorMessage += "Please upload your conducting CV.\n";
		}
	}
	
	if (errorMessage.length>0){
		errorMessage = "Validation failed.\n\n" + errorMessage;
		alert(errorMessage); //Should possibly be changed to appear in a div or span with a close button
							//Also highlight fields with red
		return false;
	}
	alert("Thank you for signing up!");
	return true;
}


//resets form to default values and format
function feeReset() {
	"use strict";
	document.getElementById("mCost").innerHTML = "$30";
	document.getElementById("familyMembership").className = "hidden";
	document.getElementById("playerSignup").className = "hidden";
	document.getElementById("conductorSignup").className = "hidden";
}
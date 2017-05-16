// JavaScript Document
function isNum(txt) {  
	"use strict";
	var numV = /[0-9]/;
	if(txt === "" || txt.match(numV)) {
		return "";
	} else {
		return "Please use only numeric characters for ";
	}
}

function isDate(txt) {
	"use strict";
	var numV = /[0-9]+\//;
	if(txt === "" || txt.match(dateV)) {
		return "";
	}
	return "Please enter a date for the DOB of ";
}

function validateForm(form) { //check fields have stuff and checkbox is ticked
	"use strict";
	var errorMessage = "";
	var email = form.email.value;
	if(email.length < 1){
		errorMessage += "Please enter an email.\n";
	} else {
		var atPosition = email.indexOf("@");
		var dotPosition = email.lastIndexOf(".");
		if (atPosition<1 || dotPosition<atPosition+2 || dotPosition+2>=email.length) {
			errorMessage += "Email not valid.\n";
		}
	}
	
	var password = form.pass.value;
	var passwordValid = form.passValidate.value;	
	if(password.length < 1) {
		errorMessage += "Please enter a password.\n";
	}
	else if(password !== passwordValid) {
		errorMessage += "Passwords don't match.\n";
	}
	
	var title = form.title.value;
	if(title.length < 1) {
		errorMessage += "Please enter a title.\n";
	}
	
	var family = form.familyName.value;
	var given = form.givenName.value;
	if(family.length < 1) {
		errorMessage += "Please enter a family name.\n";
	}
	if(given.length < 1) {
		errorMessage += "Please enter a given name.\n";
	}
	
	if(document.getElementById("familyMembership").className === ""){
		var child1 = form.childName1.value;
		var child2 = form.childName2.value;
		var child3 = form.childName3.value;
		if(child1.length > 1){
			var child1DOB = form.childDOB1.value;
			if(child1DOB.length < 1){
				errorMessage += "Please enter a date of birth for " + child1 + ".\n";
			}
		}
		if(child2.length > 1){
			var child2DOB = form.childDOB2.value;
			if(child2DOB.length < 1){
				errorMessage += "Please enter a date of birth for " + child2 + ".\n";
			}
		}
		if(child3.length > 1){
			var child3DOB = form.childDOB3.value;
			if(child3DOB.length < 1){
				errorMessage += "Please enter a date of birth for " + child3 + ".\n";
			}
		}
	}
	
	var address = form.address.value;
	if(address.length < 1) {
		errorMessage += "Please enter an address.\n";
	}
	
	var phone = form.phone.value;
	var phoneValid = isNum(phone);
	var mobile = form.mobile.value;
	var mobileValid = isNum(mobile);
	if(phone.length < 1) {
		errorMessage += "Please enter a phone number.\n";
	} else if (phoneValid !== ""){
		errorMessage += phoneValid + "your phone number.\n";
	}
	if(mobile.length < 1) {
		errorMessage += "Please enter a mobile phone number.\n";
	} else if (mobileValid !== ""){
		errorMessage += mobileValid + "your mobile number.\n";
	}
	
	if(document.getElementById("playerSignup").className === ""){
		var instruments = form.instruments.value;
		var qual = form.qualifications.value;
		var exp = form.experience.value;
		if(instruments.length < 1) {
			errorMessage += "Please enter the instruments you can play.\n";
		}
		if(qual.length < 1) {
			errorMessage += "Please enter your qualifications.\n";
		}
		if(exp.length < 1) {
			errorMessage += "Please give us a short blurb of your experience.\n";
		}
	}
	
	if (errorMessage.length>0){
		errorMessage = "Validation failed.\n\n" + errorMessage;
		alert(errorMessage);
		return false;
	}
	alert("Thank you for signing up!");
	return true;
}

function feeReset() {
	"use strict";
	document.getElementById("mCost").innerHTML = "$30";
	document.getElementById("familyMembership").className = "hidden";
	document.getElementById("playerSignup").className = "hidden";
}
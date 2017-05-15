// JavaScript Document
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
	
	var address = form.address.value;
	if(address.length < 1) {
		errorMessage += "Please enter an address.\n";
	}
	
	var phone = form.phone.value;
	var mobile = form.mobile.value;
	if(phone.length < 1) {
		errorMessage += "Please enter a phone number.\n";
	}
	if(mobile.length < 1) {
		errorMessage += "Please enter a mobile phone number.\n";
	}
	
	if (errorMessage.length>0){
		errorMessage = "Validation failed.\n\n" + errorMessage;
		alert(errorMessage);
		return false;
	}
	alert("Thank you for signing up!");
	return true;
}
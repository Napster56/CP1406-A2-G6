// JavaScript Document
var childrenNumDefault = 3; //default number of children
var childrenNum = 3; //number of children currently visible

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
	var numV = /^\d+$/; //will match input with digits
	if(numV.test(txt)) {
		return true;
	} else {
		return false;
	}
}

//tests if user input is text
function isText(txt) {  
	"use strict";
	var txtV = /^[a-z][A-Z]\s+$/; //will match input with both upper and lower case letters as well as whitespace
	if(txtV.test(txt)) {
		return true;
	} else {
		return false;
	}
}

function isPass(txt) {  
	"use strict";
	var passV = /^\w+$/; //will match input with both letters and digits and probably other stuff too, whatever dude I'm not being paid enough for this
	if(passV.test(txt)) {
		return true;
	} else {
		return false;
	}
}

//test if user input is a date
function isDate(txt) {
	"use strict";
	var dateV = /^(\d|\/)+$/; //will match input with digits and forward slash
	if(dateV.test(txt)) {
		var firstSlash = txt.indexOf("/");
		var lastSlash = txt.lastIndexOf("/");
		if((firstSlash > 0 && firstSlash < 3) && (lastSlash > firstSlash+1 && lastSlash <= firstSlash+3) && (txt.match(/\//g).length === 2) && (txt.length >= 6 && txt.length <= 10)){
			return true;
		}
	}
	return false;
}

//Function to validate user input for membership sign up
function validateForm(form) {
	"use strict";
	var errorMessage = "";
	var valid = true;
	var email = form.email.value;
	var emailError = document.getElementById(form.email.name+"Error");
	if(email.length < 1){ //string is empty
		valid = false;
		emailError.innerHTML = "Please enter an email. <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
		form.email.classList.add("error");
	} else { //check string is an email, or at least formatted like one
		var atPosition = email.indexOf("@");
		var dotPosition = email.lastIndexOf(".");
		if (atPosition<1 || dotPosition<atPosition+2 || dotPosition+2>=email.length) {
			valid = false;
			emailError.innerHTML = "Email not valid. <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
			form.email.classList.add("error");
		}
	}
	
	var password = form.pass.value;
	var passwordValid = form.passValidate.value;
	var passError = document.getElementById(form.pass.name+"Error");
	var passValidError = document.getElementById(form.passValidate.name+"Error");
	if(password.length < 1) { //string is empty
		valid = false;
		passError.innerHTML += "Please enter a password. <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
		form.pass.classList.add("error");
	} else if (!isPass(password)){
		valid = false;
		passError.innerHTML += "Please use only letters and numbers for your password. <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
		form.pass.classList.add("error");
	} else if(password !== passwordValid) { //do passwords match?
		valid = false;
		passValidError.innerHTML += "Passwords don't match. <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
		form.passValidate.classList.add("error");
	}
	
	var title = form.title.value;
	var titleError = document.getElementById(form.title.name+"Error");
	if(title.length < 1) { //string is empty
		valid = false;
		titleError.innerHTML = "Please enter a title. <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
		form.title.classList.add("error");
	} else if (!isText(title)){
		valid = false;
		titleError.innerHTML = "Please use only letters for your title. <a onClick=\"errorClear(this.parentElement)\">&times;</a>"
		form.title.classList.add("error");
	}
	
	var family = form.familyName.value;
	var given = form.givenName.value;
	var familyError = document.getElementById(form.familyName.name+"Error");
	var givenError = document.getElementById(form.givenName.name+"Error");
	if(family.length < 1) { //string is empty
		valid = false;
		familyError.innerHTML = "Please enter a family name. <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
		form.familyName.classList.add("error");
	} else if (!isText(family)){
		valid = false;
		familyError.innerHTML = "Please use only letters for your family name. <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
		form.familyName.classList.add("error");
	}
	if(given.length < 1) { //string is empty
		valid = false;
		givenError.innerHTML = "Please enter a given name. <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
		form.givenName.classList.add("error");
	} else if (!isText(given)){
		valid = false;
		givenError.innerHTML = "Please use only letters for your given name. <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
		form.givenName.classList.add("error");
	}
	
	if(document.getElementById("familyMembership").className === ""){
		//loop through and validate children
		for(var i=1; i<=10; i++){
			if(document.getElementById("child" + i).className === ""){
				var childName = eval("form.childName" + i + ".value");
				var childDOB = eval("form.childDOB" + i + ".value");
				var childError = document.getElementById("child" + i + "Error");
				if(childName === ""){ //string is empty
					valid = false;
					childError.innerHTML = "Please enter a name for child " + i + ". <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
					eval("form.childName" + i).classList.add("error");
				} else if(childDOB === "") { //string is empty
					valid = false;
					childError.innerHTML = "Please enter a date of birth for" + childName + ". <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
					eval("form.childDOB" + i).classList.add("error");
				} else { //checks that DOB is in the format of a date
					if(!isDate(childDOB)){
						valid = false;
						childError.innerHTML = "Please enter a valid date for the date of birth of " + childName + ". <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
						eval("form.childDOB" + i).classList.add("error");
					}
				}
			}
		}
	}
	
	var address = form.address.value;
	var addressError = document.getElementById(form.address.name+"Error");
	if(address.length < 1) { //string is empty
		valid = false;
		addressError.innerHTML = "Please enter an address. <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
		form.address.classList.add("error");
	}
	
	var phone = form.phone.value;
	var mobile = form.mobile.value;
	var phoneError = document.getElementById(form.phone.name+"Error");
	phoneError.innerHTML = "";
	if(phone.length < 1) { //string is empty
		valid = false;
		phoneError.innerHTML = "Please enter a phone number.";
		form.phone.classList.add("error");
	} else if (!isNum(phone)){
		valid = false;
		phoneError.innerHTML = "Please use only numbers for your phone number.";
		form.phone.classList.add("error");
	}
	if(mobile.length < 1) { //string is empty
		valid = false;
		phoneError.innerHTML += " Please enter a mobile phone number.";
		form.mobile.classList.add("error");
	} else if (!isNum(mobile)){ //string is empty
		valid = false;
		phoneError.innerHTML = " Please use only numbers for your mobile phone number.";
		form.mobile.classList.add("error");
	}
	if(phoneError.innerHTML !== ""){
		phoneError.innerHTML += " <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
	}
	
	if(document.getElementById("playerSignup").className === ""){
		var instruments = form.instruments.value;
		var qual = form.qualifications.value;
		var exp = form.experience.value;
		var instrumentsError = document.getElementById(form.instruments.name+"Error");
		var qualError = document.getElementById(form.qualifications.name+"Error");
		var expError = document.getElementById(form.experience.name+"Error");
		if(instruments.length < 1) { //string is empty
			valid = false;
			instrumentsError.innerHTML = "Please enter the instruments you can play. <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
			form.instruments.classList.add("error");
		}
		if(qual.length < 1) { //string is empty
			valid = false;
			qualError.innerHTML =  "Please enter your qualifications. <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
			form.qualifications.classList.add("error");
		}
		if(exp.length < 1) { //string is empty
			valid = false;
			expError.innerHTML =  "Please give us a short blurb of your experience. <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
			form.experience.classList.add("error");
		}
	}
	
	if(document.getElementById("conductorSignup").className === ""){
		var CV = form.resume;
		var CVError = document.getElementById(form.resume.name+"Error");
		if(!CV.files.length){ //file is selected
			valid = false;
			CVError.innerHTML = "Please upload your conducting CV. <a onClick=\"errorClear(this.parentElement)\">&times;</a>";
			form.resume.classList.add("error");
		}
	}
	return valid;
}

function errorClear(span) {
	"use strict";
	span.innerHTML = "";
}

//resets form to default values and format
function feeReset(form) {
	"use strict";
	var errorList = document.getElementsByTagName("span");
	var i;
	var idPattern = /Error$/; //will match anything ending in "Error", case sensitive
	for (i = 0; i < errorList.length; i++){
		if(idPattern.test(errorList[i].id)){ //testing matches
			errorClear(errorList[i]);
		}
	}
	//for loop here to remove error class from elements
	//originally had a try..catch statement here but it turns out classList.remove() doesn't throw exceptions
	var formChildren = form.children;
	for(i = 0; i < formChildren.length; i++){
		formChildren[i].classList.remove("error");
	}
	document.getElementById("mCost").innerHTML = "$30";
	document.getElementById("familyMembership").className = "hidden";
	document.getElementById("playerSignup").className = "hidden";
	document.getElementById("conductorSignup").className = "hidden";
	childrenNum = childrenNumDefault;
	showChildren();
}
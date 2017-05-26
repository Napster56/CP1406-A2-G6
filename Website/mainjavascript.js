// media query event handler
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 700px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    openNav();
  } else {
    closeNav();
    document.getElementById("navBtns").style.width = "100%";
    document.getElementById("navBox").style.width = "100%";
  }

}


// Open navigation bar and posiotion top center
function openNav() {
  document.getElementById("navBox").style.width = "100%";					// expand nav bar
  document.getElementById("navBox").style.textalign = "center";			// aling content center
  document.getElementById("navImg").style.marginLeft = "50%";				// center violin image
  document.getElementById("navBtn-1").style.marginLeft = "-480px";		// position button:  about us
  document.getElementById("navBtn-2").style.marginLeft = "550px";			// position button:  concerts
  document.getElementById("navBtn-3").style.marginLeft = "-600px";		// position button:  support us
  document.getElementById("navBtn-4").style.marginLeft = "550px";			// position button:  artists
  document.getElementById("navBtn-5").style.marginLeft = "-500px";		// position button:  contact us
}

// Close navigation bar. Move evrything to default position
function closeNav() {
  document.getElementById("navBox").style.width = "240px";
  document.getElementById("navImg").style.marginLeft = "0px";
  document.getElementById("navBtn-1").style.marginLeft = "0px";
  document.getElementById("navBtn-2").style.marginLeft = "0px";
  document.getElementById("navBtn-3").style.marginLeft = "0px";
  document.getElementById("navBtn-4").style.marginLeft = "0px";
  document.getElementById("navBtn-5").style.marginLeft = "0px";
}

// Delay opening link to allow nav bar transition
function delay (URL) {
    setTimeout( function() { window.location = URL }, 220 );
}

// modal for artists
function closeall(){
  document.getElementById("contactmodal").style.display = "none";
  document.getElementById("artistmodal1").style.display = "none";
  document.getElementById("artistmodal2").style.display = "none";
  document.getElementById("artistmodal3").style.display = "none";
  document.getElementById("artistmodal4").style.display = "none";
  document.getElementById("artistmodal5").style.display = "none";
}

function contactmodal() {
  closeNav();
  document.getElementById("contactmodal").style.display = "block";
}

function artistmodal1() {
  document.getElementById("artistmodal1").style.display = "block";
}

function artistmodal2() {
  document.getElementById("artistmodal2").style.display = "block";
}

function artistmodal3() {
  document.getElementById("artistmodal3").style.display = "block";
}

function artistmodal4() {
  document.getElementById("artistmodal4").style.display = "block";
}

function artistmodal5() {
  document.getElementById("artistmodal5").style.display = "block";
}

window.onload = closeall();

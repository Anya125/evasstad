// Text skickat after you pressed the nyfikenbutton
var node = document.getElementsByClassName("nyfikenbutton")[0];

let url = new URL(window.location.href);
let telephoneNumberSent = url.searchParams.get("telephone_number_sent");
let contactFormSent = url.searchParams.get("contact_form_sent");
let ofertRequestSent = url.searchParams.get("ofert_request_sent");
let referenceSent = url.searchParams.get("reference_sent");

if(telephoneNumberSent) {
  node.innerHTML = "Skickat!";
}
// node.onclick = function () {
//   document.getElementById("nyfikenInputTelefon").value = "";
//   node.innerHTML = "Skickat!";
// };

node.onmouseout = function () {
  node.innerHTML = "Skicka";
};

// Text skickat after you pressed the Skicka offertförfrågan btn
var node2 = document.getElementsByClassName("btn-submit")[0];

if(ofertRequestSent) {
  node2.innerHTML = "Offertförfrågan skickat! Vi återkommer inom kort.";
}

// node2.onclick = function () {
//   node2.innerHTML = "Offertförfrågan skickat! Vi återkommer inom kort.";
// };

node2.onmouseout = function () {
  node2.innerHTML = "Skicka offertförfrågan";
};

// Text skickat after you pressed the Skicka email btn
var node3 = document.getElementsByClassName("btn-submit-email")[0];

if(contactFormSent) {
  node3.innerHTML = "Tack för att du kontaktar oss!";
}

// node3.onclick = function () {
//   node3.innerHTML = "Tack för att du kontaktar oss!";
// };

node3.onmouseout = function () {
  node3.innerHTML = "Skicka";
};

// Text skickat after you pressed the Skicka referns
var node4 = document.getElementsByClassName("btn-submit-referens")[0];
if(referenceSent) {
  node4.innerHTML = "Tack för dina referenser!";
}

// node4.onclick = function () {
//   node4.innerHTML = "Tack för dina referenser!";
// };

node4.onmouseout = function () {
  node4.innerHTML = "Skicka referenser";
};

//Slideshow


// Automatic Slideshow
var slideIndex = 1;

var myTimer;

window.addEventListener("load", function () {
  showSlides(slideIndex);
  myTimer = setInterval(function () {
    plusSlides(1)
  }, 4000);
})



// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides(slideIndex -= 1);
  } else {
    showSlides(slideIndex += 1);
  }
  if (n === -1) {
    myTimer = setInterval(function () {
      plusSlides(n + 2)
    }, 4000);
  } else {
    myTimer = setInterval(function () {
      plusSlides(n + 1)
    }, 4000);
  }
}

// Set interval function initializes the slideshow 
//as well as decide whether to go forward, or backward, within the sequence

//Controls the current slide and resets interval if needed
function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(n + 1)
  }, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



//Funkcja do chowania Hur ofta skall vi städa

function yesnoCheck() {
  if (document.getElementById('yesCheck').checked) {
    document.getElementById('ifYes').style.display = 'block';
  } else
    document.getElementById('ifYes').style.display = 'none';

}

//Funkcja do hamburgera
function myFunction() {
  var x = document.getElementById("menu-container-mobile");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
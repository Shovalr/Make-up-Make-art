// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = 50;
//
// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

//Contact Form Validation

function validateForm() {
    var valid = 1;
    let name = document.forms["contact"]["full_name"].value;
    let email = document.forms["contact"]["email"].value;
    let mobile = document.forms["contact"]["mobile"].value;
    let form_textarea = document.forms["contact"]["form_textarea"].value;
    let subject = document.getElementById('subject');
    console.log(subject.value);

    if (name == "") {
        document.getElementById("full_name").style.borderColor = "red";
        valid = 0;
    }else{
        document.getElementById("full_name").style.borderColor = "black";
    }

    var check_email = 0;
    for (var i = 0; i < email.length; i++) {
        if(email[i] == '@'){
            check_email = 1
        }
    }


    if (email == "") {
        document.getElementById("email").style.borderColor = "red";
        valid = 0;
    }else if(check_email == 0){
        alert('כתובת מייל לא תקינה')
        document.getElementById("email").style.borderColor = "red";
    }else{
        document.getElementById("email").style.borderColor = "black";
    }

    if (mobile == "") {
        document.getElementById("mobile").style.borderColor = "red";
        valid = 0;
    }else if(mobile.length != 10){
        alert('יש להזין מספר טלפון בעל 10 ספרות בלבד')
        document.getElementById("mobile").style.borderColor = "red";
    }else{
        document.getElementById("mobile").style.borderColor = "black";
    }

    if (subject.value == "") {
        document.getElementById("subject").style.borderColor = "red";
        valid = 0;
    }else{
        document.getElementById("subject").style.borderColor = "black";
    }

    if (form_textarea == "") {
        document.getElementById("form_textarea").style.borderColor = "red";
        valid = 0;
    }else{
        document.getElementById("form_textarea").style.borderColor = "black";
    }

     if(valid == 0){
         return false;
     }else {
         document.getElementById("form_alert").innerText = "טופס נשלח בהצלחה!";
         setTimeout(function () {
             document.getElementById("form_alert").innerText = "";
         },2500)
         return false;
     }

}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
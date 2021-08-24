let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let emailError = document.getElementById("email-error");
let firstNameError = document.getElementById("first-name-error");
let lastNameError = document.getElementById("last-name-error");
let formItems = [{firstName:firstName.value,lastName:lastName.value,email:email.value, message:message.value}];

class form{

    constructor(){
        formItems= JSON.parse(localStorage.getItem('formItems')) || [];
        emailError.style.visibility='hidden';
        firstNameError.style.visibility='hidden';
        lastNameError.style.visibility='hidden';
    }

    onSubmit(){
        emailError.style.visibility='hidden';
        firstNameError.style.visibility='hidden';
        lastNameError.style.visibility='hidden';

        if(email.value.indexOf("@")<0){
            emailError.style.visibility='visible';
        }

        if(firstName.value.length<=0){
            firstNameError.style.visibility='visible';
        }

        if(lastName.value.length<=0){
            lastNameError.style.visibility='visible';
        }
        if(email.value.indexOf("@")>=0 && firstName.value.length>0 && lastName.value.length>0) {
        let newForm = {firstName:firstName.value,lastName:lastName.value,email:email.value, message:message.value};
        // newForm.push(firstName);
        // newForm.push(lastName);
        console.log(newForm);
        formItems.push(newForm);
        localStorage.setItem('formItems', JSON.stringify(formItems));
        window.location.href = "./form.html";
        }
    }


}

let formObj;
window.addEventListener("load", () => {
    formObj=new form();
});







var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("reviews-card");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  slides[slideIndex-1].style.marginLeft = "10px"; 
  slides[slideIndex].style.display = "block"; 
  slides[slideIndex].style.marginLeft = "50px"; 
  dots[slideIndex-1].className += " active";
}
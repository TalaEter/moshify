firstName = document.getElementById("first-name");
lastName = document.getElementById("last-name");
email = document.getElementById("email");
message = document.getElementById("message");
emailError = document.getElementById("email-error");
firstNameError = document.getElementById("first-name-error");
lastNameError = document.getElementById("last-name-error");
formItems = [{firstName:firstName.value,lastName:lastName.value,email:email.value, message:message.value}];

class form{

    constructor(){
        formItems= JSON.parse(localStorage.getItem('formItems')) || [{firstName:firstName.value,lastName:lastName.value,email:email.value, message:message.value}];
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
items=[];
class displayForms{


    constructor(){
        items = JSON.parse(localStorage.getItem('formItems'));
        // let itemsHtml = this.items.reduce((html, itemObj) => html += this.displayTasksList(itemObj.firstName, itemObj.lastName, itemObj.email, itemObj.message), '');
        // let html='';
        // let itemsHtml = this.items.forEach(item => {
        //     html+=`        
        //     <h3>First name: ${item.firstName}</h3>
        //     <h3>Last name: ${item.lastName}</h3>
        //     <h5>Email address: ${item.email}</h5>
        //     <p>Message: ${item.message}</p>
        //     <hr>
        //     `;
        //     });
        // document.getElementById('display').innerHTML = itemsHtml;
        this.loadFormItems();
    }

    loadFormItems(){
        let itemsHtml = items.reduce((html, itemObj) => html += this.displayFormItems(itemObj.firstName, itemObj.lastName, itemObj.email, itemObj.message), '');
        document.getElementById('display').innerHTML = itemsHtml;
    }

    displayFormItems(fname, lname, email,message){
        return `        
            <h3>First name: ${fname}</h3>
            <h3>Last name: ${lname}</h3>
            <h5>Email address: ${email}</h5>
            <p>Message: ${message}</p>
            <hr>
            `;
    }


}

let formsObj;
window.addEventListener("load", () => {
    formsObj=new displayForms();
});
contacts=['Hadi','Harsh','Mohit']//Will be replaced a list of Objects
const addContact=(contact)=>{//function to add new contact
    let c=document.createElement("div");//creating div
    c.innerHTML=contact;//adding contact info to div
    $(".contact-list").append(c);
}
for (const contact of contacts) {// loop to add contacts 
    console.log(contact);
    addContact(contact);
}
$(document).ready(()=>{
    $('#submit').on(
        {"click": function(){//When Button is Clicked
            let name=$("#name").val();
            addContact(name);
            $("#name").val("");//Resetting input box
        }}
    )
})

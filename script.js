contacts=['Hadi','Harsh','Mohit']
const addContact=(contact)=>{
    let c=document.createElement("div");
    c.innerHTML=contact;
    $(".contact-list").append(c);
}
for (const contact of contacts) {
    console.log(contact);
    addContact(contact);
}
$(document).ready(()=>{
    $('#submit').on(
        {"click": function(){
            let name=$("#name").val();
            console.log(name);
            addContact(name);
            $("#name").val("");
        }}
    )
})

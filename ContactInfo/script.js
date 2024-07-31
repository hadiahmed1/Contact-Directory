let contacts=[]//Will be replaced a list of Objects
class Contact{
    constructor(contact_name,phno1,phno2,emailID,instaID,fbID,github,adress,dob,gender){
        this.contact_name=contact_name;
        this.phno1=phno1;
        this.phno2=phno2;
        this.emailID=emailID;
        this.instaID=instaID;
        this.dob=dob;
        this.fbID=fbID;
        this.github=github;
        this.adress=adress;
        this.gender=gender;
        contacts.push(this);//adding new contact to contacts
        addContact(this,".contact-list");//Whenever new Contact is created it is automatically added to the CONTACT LIST
    }
}
const appendDiv=(className,content,parent)=>{
    const element=document.createElement("div");
    element.className=className;
    element.innerHTML=content;
    parent.appendChild(element);
}
const addContact=(contact,container)=>{//function to add new contact to said Container
    let card=document.createElement("div");//creating contact card
    card.className="contactCard";
    appendDiv("contact_name","Name:"+contact.contact_name,card);
    appendDiv("contact_phno1","Phone Number 1:"+contact.phno1,card);
    appendDiv("contact_phno2","Phone Number 2:"+contact.phno2,card);
    appendDiv("contact_email","Email ID:"+contact.emailID,card);
    appendDiv("contact_insta","Instagram ID:"+contact.instaID,card);
    appendDiv("contact_fb","Facebook ID:"+contact.fbID,card);
    appendDiv("contact_git","GitHub ID:"+contact.github,card);
    appendDiv("contact_adress","Address:"+contact.adress,card);
    appendDiv("contact_dob","Date of Birth:"+contact.dob,card);
    appendDiv("contact_gender","Gender:"+contact.gender,card);
    $(container).append(card);
}
function resetForm() {
    $("#name").val("");
    $("#phno1").val("");
    $("#phno2").val("");
    $("#emailID").val("");
    $("#instaID").val("");
    $("#fbID").val("");
    $("#github").val("");
    $("#adress").val("");
    $("#dob").val("");
    $("#gender").val("");
}
//Adding Random Contacts for Testing Purposes
let new_contact=new Contact("Hadi",123,456,"abc@gmail.com","abc_def","facebook","git","123 street,kolkata700012","1-2-2002","Male");
new Contact("Qadir Ahmed");
new Contact("Deep Das")
new Contact("Arnab Dey")
new Contact("Atalanta Dey")
new Contact("Sourav Das")
new Contact("Harsh Jaiswal")
new Contact("Raj Jaiswal")
new Contact("Rajdeep Mondal")
new Contact("Srijan Mondal")
new Contact("Mohit Gupta")
new Contact("Ankit Gupta")
$(document).ready(()=>{
    $('#submit').on(//adding new Contact
        {"click": function(){//When Button is Clicked
            //Extracting Value From Form
            let contact_name=$("#name").val();
            let phno1=$("#phno1").val();
            let phno2=$("#phno2").val();
            let emailID=$("#emailID").val();
            let instaID=$("#instaID").val();
            let fbID=$("#fbID").val();
            let github=$("#github").val();
            let adress=$("#adress").val();
            let dob=$("#dob").val();
            let gender=$("#gender").val();
            // Using Extracted Value to Genrate new Object
            new Contact(contact_name,phno1,phno2,emailID,instaID,fbID,github,adress,dob,gender);
            resetForm();//Resetting input box
        }}
    )
    //Search
    $('#search-btn').on({
        "click":function(){
            $(".search-result").children().remove();
            contacts.forEach(contact => {
                if(contact.contact_name.toLowerCase().includes($("#search").val().toLowerCase())){
                    addContact(contact,".search-result");
                }
            });
        }
    });
})

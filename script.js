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
        contacts.push(this);
        addContact(this);//Whenever new Contact is created it is automatically added to the CONTACT LIST
    }
}
const addContact=(contact)=>{//function to add new contact
    let card=document.createElement("div");//creating contact card
    card.className="contactCard";
    // Creating Elements to put inside card
    let contact_name=document.createElement("div");
    let phno1=document.createElement("div");
    let phno2=document.createElement("div");
    let emailID=document.createElement("div");
    let instaID=document.createElement("div");
    let fbID=document.createElement("div");
    let github=document.createElement("div");
    let adress=document.createElement("div");
    let dob=document.createElement("div");
    let gender=document.createElement("div");
    // Assigning class to Elements
    contact_name.className="contact_name";
    phno1.className="phno1";
    phno2.className="phno2";
    emailID.className="emailID";
    instaID.className="instaID";
    fbID.className="fbID";
    github.className="github";
    adress.className="adress";
    dob.className="dob";
    gender.className="gender";
    // Assigning text to Elements
    contact_name.innerHTML="Name:"+contact.contact_name;
    phno1.innerHTML="Phone Number1:"+contact.phno1;
    phno2.innerHTML="Phone Number2:"+contact.phno2;
    emailID.innerHTML="Email ID:"+contact.emailID;
    instaID.innerHTML="Instagram:"+contact.instaID;
    fbID.innerHTML="Face Book:"+contact.fbID;
    github.innerHTML="Github:"+contact.github;
    adress.innerHTML="Adress:"+contact.adress;
    dob.innerHTML="DOB:"+contact.dob;
    gender.innerHTML="Gender:"+contact.gender;
    // Adding Elements to card
    card.appendChild(contact_name);
    card.appendChild(phno1);
    card.appendChild(phno2);
    card.appendChild(emailID);
    card.appendChild(instaID);
    card.appendChild(fbID);
    card.appendChild(github);
    card.appendChild(adress);
    card.appendChild(dob);
    card.appendChild(gender);
    // Adding Card to HTML File
    $(".contact-list").append(card);
}
let new_contact=new Contact("Hadi",123,456,"abc@gmail.com","abc_def","facebook","git","123 street,kolkata700012","1-2-2002","Male");
$(document).ready(()=>{
    $('#submit').on(
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
            //Resetting input box
            // $("#name").val("");//Resetting input box
            // $("#phno1").val("");
            // $("#phno2").val("");
            // $("#emailID").val("");
            // $("#instaID").val("");
            // $("#fbID").val("");
            // $("#github").val("");
            // $("#adress").val("");
            // $("#dob").val("");
            // $("#gender").val("");
        }}
    )
})

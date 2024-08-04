let agency_list=[];//Will be replaced a list of Objects
class Agency{
    constructor(agency_name,phno,emailID,instaID,adress,country,city){
        this.agency_name=agency_name;
        this.phno=phno;
        this.emailID=emailID;
        this.instaID=instaID;
        this.adress=adress;
        this.country=country;
        this.city=city;
        agency_list.push(this);//adding new contact to contacts
        // addAgency(this,".agency-list");//Whenever new Contact is created it is automatically added to the CONTACT LIST
    }
}
let destinations=[];
class Destination{
    constructor(city,country,picture){
        this.city=city;
        this.country=country;
        this.picture=picture;
        createDestinationCard(picture,city,country);
    }
}
const appendDiv=(className,content,parent)=>{
    const element=document.createElement("div");
    element.className=className;
    element.innerHTML=content;
    parent.appendChild(element);
}
function createDestinationCard(picture,city,country){
    let card=document.createElement("li");
    let img=document.createElement("img")
    img.setAttribute("src",picture);
    card.appendChild(img);
    let p=document.createElement("p");
    p.innerHTML=`${country} <strong>${city}</strong>`;
    card.appendChild(p);
    appendDiv("agency-list","",card);
    document.body.querySelector("#destinations").appendChild(card);
}
new Destination("Tokyo","Japan","./images/places/tokyo.jpg");
new Destination("Paris","France","./images/places/paris.jpg");
new Destination("Bali","Indonesia","./images/places/bali.jpg");
new Destination("Sydney","Australia","./images/places/sydney.jpg");
new Destination("Hawaii","USA","./images/places/hawaii.jpg");
new Destination("Munich","Germany","./images/places/munich.jpg");
new Destination("Miami","USA","./images/places/miami.jpg")

const addAgency=(agency,container)=>{//function to add new contact to said Container
    let card=document.createElement("div");//creating contact card
    card.className="contactCard";
    appendDiv("name","Name:"+agency.agency_name,card);
    appendDiv("phno1","Phone Number:"+agency.phno,card);
    appendDiv("email","Email ID:"+agency.emailID,card);
    appendDiv("insta","Instagram ID:"+agency.instaID,card);
    appendDiv("adress","Address:"+agency.adress,card);
    appendDiv("country","Country:"+agency.country,card);
    appendDiv("city","City:"+agency.city,card);
    $(container).append(card);
}
function resetForm() {
}
function addSearchBar(parent){
    let search_bar=document.createElement("div");
    search_bar.className="search_bar";
    search_bar.innerHTML=`<input type="text" id="search" placeholder="Search..."><button id="search-btn">Search</button><div class="search-result"></div>`;
    $(parent).append(search_bar);
}
//Adding Random Contacts for Testing Purposes
new Agency("bcd",1234,"","","","USA","miamai");
new Agency("cde",1234,"","","","USA","new york");
new Agency("abc",1234,"","","","USA","new york");
new Agency("def",1234,"","","","USA","new york");
new Agency("efg",1234,"","","","UK","London");
new Agency("ghi",1234,"","","","Japan","Tokyo");
new Agency("hij",1234,"","","","UK","London");
new Agency("ijk",1234,"","","","UK","London");
new Agency("ijk",1234,"","","","Spain","Barcelona");
new Agency("jkl",1234,"","","","Spain","Barcelona");

$(document).ready(()=>{
    //Search
    $("#hero").on("click", "#search-btn", function(){
        $(".search-result").children().remove();
        agency_list.forEach(agency => {
            console.log(agency.agency_list);
            if(agency.city.toLowerCase().includes($("#search").val().toLowerCase())){
                addAgency(agency,".search-result");
            }
        });
    });
    $("#discover").on({
        "click":function(){
            addSearchBar($(this).parent());
        }
    });
    $("strong").on({
        "click":function(){
            let container=$(this).parent().siblings('.agency-list');
            console.log($(this).text());
            $(".agency-list").children().remove();
            agency_list.forEach(agency => {
                if(agency.city.toLowerCase().includes($(this).text().toLowerCase())){
                    addAgency(agency,container);
                }
            });
        }
    })
})

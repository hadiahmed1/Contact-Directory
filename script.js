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
/*function addSearchBar(parent){
    let search_bar=document.createElement("div");
    search_bar.className="search_bar";
    search_bar.innerHTML=<input type="text" id="search" placeholder="Search..."><button id="search-btn">Search</button><div class="search-result"></div>;
    $(parent).append(search_bar);
}*/
// ... (previous code remains the same)

function addSearchBar(parent) {
    let search_container = document.createElement("div");
    search_container.className = "search-container";
    
    let search_bar = document.createElement("div");
    search_bar.className = "search_bar";
    search_bar.innerHTML =` <input type="text" id="search" placeholder="Search..."><button id="search-btn">Search</button></input>`;
    
    let search_result = document.createElement("div");
    search_result.className = "search-result";
    
    search_container.appendChild(search_bar);
    search_container.appendChild(search_result);
    $(parent).append(search_container);
}
//Adding Random Contacts for Testing Purposes
new Agency("YOTEL Miami",+17867855700,"","","227 NE 2nd St, Miami, FL 33132, United States","USA","miami");
new Agency("Posh Hostel South Beach",+13056748821,"","","820 Collins Ave, Miami Beach, FL 33139, United States","USA","miami");
new Agency("Novotel Miami Brickell",+17866002600,"","","1500 SW 1st Ave, Miami, FL 33129, United States","USA","miami");
new Agency("Equinox Hotel New York",+12128129200,"","","33 Hudson Yards, New York, NY 10001, United States","USA","new york");
new Agency("Harmony Suites Secaucus Meadowlands",+12013813000,"","","455 Plaza Dr, Secaucus, NJ 07094, United States","USA","new york");
new Agency("HI New York City Hostel",+12129322300,"","","891 Amsterdam Ave, New York, NY 10025, United States6","USA","new york");
new Agency("efg",1234,"","","","UK","London");
new Agency("hij",1234,"","","","UK","London");
new Agency("ijk",1234,"","","","UK","London");
new Agency("ghi",1234,"","","","Japan","Tokyo");
new Agency("ghi",1234,"","","","Japan","Tokyo");
new Agency("ghi",1234,"","","","Japan","Tokyo");
new Agency("ijk",1234,"","","","Spain","Barcelona");
new Agency("jkl",1234,"","","","Spain","Barcelona");
new Agency("jkl",1234,"","","","Spain","Barcelona");

// ... (Agency creation code remains the same)

$(document).ready(() => {
    //Search
    $("#hero").on("click", "#search-btn", function() {
        $(".search-result").children().remove();
        let count = 0;
        agency_list.forEach(agency => {
            if (agency.city.toLowerCase().includes($("#search").val().toLowerCase())) {
                addAgency(agency, ".search-result");
                count++;
            }
        });
        if (count == 0) {
            $(".search-result").append(`<h3>Sorry No Result found</h3>`);
        }
    });

    $("#discover").on({
        "click": function() {
            if (!$(this).parent().find('.search-container').length) {
                addSearchBar($(this).parent());
            }
        }
    });

    $("#destinations").on(
        "click","li",function(){
            let container=$(this).children(".agency-list");
            $(".agency-list").children().remove();
            let count=0;
            agency_list.forEach(agency => {
                if(agency.city.toLowerCase().includes($(this).children("p").children("strong").text().toLowerCase())){
                    addAgency(agency,container);
                    count++;
                }
            });
            if(count==0){
                $(container).append(`<h3>Sorry No Result found</h3>`);
            }
        }
    )

});

/*$(document).ready(()=>{
    //Search
    $("#hero").on("click", "#search-btn", function(){
        $(".search-result").children().remove();
        let count=0;
        agency_list.forEach(agency => {
            console.log(agency.agency_list);
            if(agency.city.toLowerCase().includes($("#search").val().toLowerCase())){
                addAgency(agency,".search-result");
                count++;
            }
        });
        if(count==0){
            $(this).parent().append(<h3>Sorry No Result found</h3>);
        }
    });
    $("#discover").on({
        "click":function(){
            if (!$(this).parent().find('.search_bar').length) {
                addSearchBar($(this).parent());
            }
        }
    });*/
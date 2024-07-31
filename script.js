let agency_list=[]//Will be replaced a list of Objects
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
const appendDiv=(className,content,parent)=>{
    const element=document.createElement("div");
    element.className=className;
    element.innerHTML=content;
    parent.appendChild(element);
}
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
//Adding Random Contacts for Testing Purposes
new Agency("bcd",1234,"","","","USA","miamai");
new Agency("cde",1234,"","","","USA","new york");
new Agency("abc",1234,"","","","USA","new york");
new Agency("def",1234,"","","","USA","new york");
new Agency("efg",1234,"","","","UK","London");
new Agency("ghi",1234,"","","","UK","London");
new Agency("hij",1234,"","","","UK","London");
new Agency("ijk",1234,"","","","UK","London");
new Agency("ijk",1234,"","","","Spain","Barcelona");
new Agency("jkl",1234,"","","","Spain","Barcelona");

$(document).ready(()=>{
    //Search
    $('#search-btn').on({
        "click":function(){
            $(".search-result").children().remove();
            agency_list.forEach(agency => {
                if(agency.agency_name.toLowerCase().includes($("#search").val().toLowerCase())){
                    addAgency(agency,".search-result");
                }
            });
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

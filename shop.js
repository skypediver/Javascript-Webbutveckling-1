/**
 * Created by lars ericsson on 2016-02-17.
 */


var i=0;
var   pFix="Item nr: ";
var price="";
function saveData(id,price){
    i++;
    pFix= pFix+i;
    item=id;
    item= "Prod-id: "+item+" | " + pFix;
   // localStorage.setItem(pFix, price);
    localStorage.setItem(item,price);
    pFix="Item nr: ";
    item="";
}

function displayData(){
//remove unwanted commas from display

 //convert to string - maybe  not necessary??
var commaDel = String(allStorage());
    //replace all commas with nothing
    commaDel=commaDel.replace(/[,]/g , '');


    var displayString = "<h3>Your Shopping Basket </h3><p>" + commaDel+"</p>";

    document.getElementById("yourCart").innerHTML =displayString;

}

function clearAll(){  i=0;  localStorage.clear();}

function allStorage() {
    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;
    for (; key = keys[i]; i++) {
        archive.push("<br>" + key + ' | Price: ' + localStorage.getItem(key));

    }
    return String(archive);
}

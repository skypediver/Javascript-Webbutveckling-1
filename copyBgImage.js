/**
 * Created by pk53084 on 2016-06-08.
 */

var bgURL;
window.onload= function(){
    //set bgimages by javascript - easiest that way
    document.getElementById("it1").style.background="url(katt2.jpg)";
    document.getElementById("it2").style.background="url(katt1.jpg)";
    document.getElementById("it3").style.background="url(katt3.jpg)";


    //set properties to a bunch of objects belonging to same class
    var div = document.getElementsByClassName("items");
    for(i=0;i< 14;i++){

        div[i].style.backgroundColor="#000000";
        div[i].style.backgroundRepeat="no-repeat";
        div[i].style.backgroundPosition="center center";
                }
    //set size of order div
    document.getElementById("order").style.width="500px";
    document.getElementById("order").style.height="450px";
}

// copy backgroundimage from clicked div to "order div"
function copyBGimage(id) {
    //get path to bgimage
    bgURL= document.getElementById(id).style.background;
    //set same background on order as clicked div
    // and some other properties
    document.getElementById("order").style.background=bgURL;
    document.getElementById("order").style.backgroundColor="#000000";
    document.getElementById("order").style.backgroundRepeat="no-repeat";
    document.getElementById("order").style.backgroundAttachment="fixed";
    document.getElementById("order").style.backgroundPosition="center center";
    //set properties of dimmer div - visible and centering content
    document.getElementById("dimmer").style.display="flex";
    document.getElementById("dimmer").style.alignItems="center";
    document.getElementById("dimmer").style.justifyContent="center";

}

function reset(){
    document.getElementById("dimmer").style.display="none";

}




/**
 * Created by PK53084 on 2016-06-09.
 */

var dest;

window.onload=function(){
    dest= document.getElementById('imgbox');
}


function fadeOut() {
    var opValue=1;
    var timer = setInterval(function () {
        if (opValue <= 0.01){clearInterval(timer); }
            dest.style.opacity = opValue;
            opValue -= opValue * 0.01;}, 1);
                }

function fadeIn() {
    var opValue=.01;
    var timer = setInterval(function () {
        if (opValue >= 1){clearInterval(timer); }
        dest.style.opacity = opValue;
        opValue += opValue * 0.01;}, 1);
}




// dest.style.filter = 'alpha(opacity=' + opValue * 100 + ")";
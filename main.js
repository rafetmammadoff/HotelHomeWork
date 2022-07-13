var back=document.querySelector("#back");


window.onload = function () {
    window.setInterval(changeImage, 2000);
    function changeImage() {   
        var BackgroundImg=["./assets/images/3.jpg",
            "./assets/images/4.jpg"
        ];
        var i = Math.floor((Math.random() * 2));
        back.style.backgroundImage='url("' + BackgroundImg[i] + '")';
    }
    
}
window.onscroll=function(){myFunction()};

var header=document.querySelector("#headerr");
var sticky=header.offsetTop;
function myFunction() {
    if (window.pageYOffset>sticky) {
        header.classList.add("rafet")
    }
    else{
        header.classList.remove("rafet")
    }
}
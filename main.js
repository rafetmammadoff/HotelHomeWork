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





function changeTab(event,content) {
    var contents=document.querySelectorAll("#events .tab-content");
    for (let a = 0; a < contents.length; a++) {
        contents[a].style.display="none"


        
    }

    var links=document.querySelectorAll("#events .tablink");
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.className= element.className.replace(" active", "")
        
    }

    var ab=document.getElementById(content).style.display="block"
    
    event.currentTarget.className += " active";
    

    

    
}
document.getElementById("active-tab").click()
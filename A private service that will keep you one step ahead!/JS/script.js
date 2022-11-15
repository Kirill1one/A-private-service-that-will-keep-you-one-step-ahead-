let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}






let icon = document.getElementById("icon");
let jsMenu = document.getElementById("myman");

icon.addEventListener("click", cntrol)
function cntrol(){
if(jsMenu.className === "topman"){
       jsMenu.className += " adaptive";
      }else{
        jsMenu.className = "topman";
    }
}
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
    anchor.addEventListener("click", function(event){
    event.preventDefault();
    const blockID = anchor.getAttribute("href")
        document.querySelector("" + blockID ).scrollIntoView({
        behavior: "smooth",
            block: "start"
        })
    
    })
   }


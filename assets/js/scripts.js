let navBar = document.getElementById("full-navbar");
let textb = document.getElementById("mySidebar");

function openNav() {
    document.getElementById("mySidebar").style.width = "70vw";
    
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    
  }

// const d = new Date();
// let day = d.getDay()
// // let day = 0
// if( day > 4 || day == 0){
//     document.getElementById("weekend").style.display = "flex";
//     console.log("Es fin de semana!!")
//     }else{
//         document.getElementById("weekend").style.display = "none";
//         console.log("Aún no es fin de semana")
//     }

    // navBar.style.height ="128px";
    window.onscroll = function(){
        if (document.documentElement.scrollTop >= 80){
            navBar.style.backgroundColor = "#000000e0";
            navBar.style.height ="96px";
            navBar.style.color="#ffffff";
            textb.style.color ="#0a0a0a";
        } else{
            // navBar.style.backgroundColor ="transparent";
            navBar.style.backgroundColor ="#ffffff";
            navBar.style.height ="128px";
            navBar.style.color = "#0a0a0a";
            

            
        }
    }
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "70vw";
    
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    
  }

const d = new Date();
let day = d.getDay()
if( day > 4){
    document.getElementById("weekend").style.display = "flex";
    console.log("Es fin de semana!!")
    }else{
        document.getElementById("weekend").style.display = "none";
        console.log("Aún no es fin de semana")
    }


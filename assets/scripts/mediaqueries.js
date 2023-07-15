//this snippet suppose to change the Id on the active tub when nav bar collapse

let screen_size = window.matchMedia("(max-width:768px)");
let large_screens = window.matchMedia("(min-width:768px)");
//function to remove styling of the active tub on collapse
function tub_deactivator(screen_size){
    if(screen_size.matches){
        document.getElementById('menu_item_active').id ="menu_item";
        
       
    }
}

//reloads the page on screen resize when navbar extends 

function tub_activator(large_screens){
    location.reload();
    c
}

window.addEventListener('resize',tub_activator);
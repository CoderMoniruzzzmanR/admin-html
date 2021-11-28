
var dark_icon =  document.getElementById("dark-icon");
var body_layer = document.getElementById("body-layer");
dark_icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if( document.body.classList.contains("dark-theme")){
        dark_icon.src = "assets/img/sunny-outline.svg";
        dark_icon.title = "Light theme";
    }
    else{
        dark_icon.src = "assets/img/moon-outline.svg";
    }
}
var toggle_bar = document.getElementById("mobile-toggle");
var sidebar = document.getElementById("sidebar");
toggle_bar.onclick = function () {
    sidebar.classList.toggle("sidebar");
    body_layer.classList.toggle("overlay-body-in");
    toggle_bar.classList.toggle("mobile-icon-close");
}
let arrow = document.querySelectorAll(".nav-link");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
    let arrowParent = e.target.parentElement;
    arrowParent.classList.toggle("is-expanded");
    });
}



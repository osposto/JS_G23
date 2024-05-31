function toggleMenu() {
  
  var label = document.querySelector("label");
  /*console.log(label);*/
  /*overlay.style.display = (overlay.style.display === "block") ? "none": "block";*/
  label.innerHTML = (label.innerHTML === "Menu") ? "Close" : "Menu";
  label.className = (label.className === "menu_m") ? "menu_m1" : "menu_m";
}
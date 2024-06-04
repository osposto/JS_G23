function toggleMenu() {
  
  var label = document.querySelector("label");
  var capa = document.querySelector(".capa-superior");
  var ulcon = document.querySelector("#ulcon");
  console.log(label);
  console.log(capa);
  console.log(ulcon);
  /*console.log(label);*/
  capa.style.display = (capa.style.display === "block") ? "none": "block";
  label.innerHTML = (label.innerHTML === "Menu") ? "Close" : "Menu";
  label.className = (label.className === "menu_m") ? "menu_m1" : "menu_m";
  ulcon.className = (ulcon.className === "ul-cont1") ? "ul-cont2": "ul-cont1";

}
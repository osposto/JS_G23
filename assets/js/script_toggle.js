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

};
function validateMail(){
  var correo = document.querySelector("#correo");
  var er = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
  console.log(correo.value);
  var result = er.test(correo.value);
    console.log(result);
  if(result)
    console.log("resultado correcto");
  else
    console.log("es una porquería");
};

function toggleMenu() {
  var label = document.querySelector("label");
  var capa = document.querySelector(".capa-superior");
  var ulcon = document.querySelector("#ulcon");
  console.log(label);
  console.log(capa);
  console.log(ulcon);
  /*console.log(label);*/
  capa.style.display = capa.style.display === "block" ? "none" : "block";
  label.innerHTML = label.innerHTML === "Menu" ? "Close" : "Menu";
  label.className = label.className === "menu_m" ? "menu_m1" : "menu_m";
  ulcon.className = ulcon.className === "ul-cont1" ? "ul-cont2" : "ul-cont1";
}

function validateMail() {
  var nombre = document.querySelector("#nombre");
  var nom_men = document.querySelector(".nom-men");
  var apellido = document.querySelector("#apellido");
  var ape_men = document.querySelector(".ape-men");
  var correo = document.querySelector("#correo");
  var mail_men = document.querySelector(".mail-men");
  const er =
    /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+)*|"(?:[\u0021\u0023-\u005B\u005D-\u007E]|\\[\u0021-\u007E])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}|(?:\[(?:(?:(2(?:5[0-5]|[0-4][0-9])|1[0-9]{2}|[1-9]?[0-9]))\.){3}(?:(2(?:5[0-5]|[0-4][0-9])|1[0-9]{2}|[1-9]?[0-9])|[a-zA-Z0-9-]{1,61}[a-zA-Z0-9])\]))$/;
  /*var result = er.test(correo.value);*/
  var mensaje = document.querySelector("#mensaje-01");
  var men_men = document.querySelector(".men-men");
  var terminos = document.querySelector("#check");
  var term_men = document.querySelector(".term-men");
  var boton = document.querySelector("#boton");
  var button = false;

  console.log(boton);

  /*Chequea nombre*/
  if (nombre.value == "") {
    nom_men.style.display = "flex";
    button = false;
  } else {
    nom_men.style.display = "none";
    button = true;
  }
  
  /*Chequea apellido*/
  if (apellido.value == "") {
    ape_men.style.display = "flex";
    button = false;
  } else {
    ape_men.style.display = "none";
    button = button===true ? true : false;
  }

  /*chequeo  de email presente y correcto*/

  if (!er.test(correo.value)) {
    mail_men.style.display = "flex";
    button = false;
  } else {
    mail_men.style.display = "none";
    button = button===true ? true : false;
  }

  /*chequeo de mensaje con texto*/
  if (mensaje.value == "") {
    men_men.style.display = "flex";
    button = false;
  } else {
    men_men.style.display = "none";
    button = button===true ? true : false;
  }

  /*aceptacion de términos*/
  if (!(terminos.checked)){
    term_men.style.display = "flex";
    button = false;
  } else {
    term_men.style.display = "none";
    button = button===true ? true : false;
  }

  /*habilitación de botón submit*/
  if (button) {
    console.log(button);
    console.log(boton)
    boton.disabled = false;
  }
}

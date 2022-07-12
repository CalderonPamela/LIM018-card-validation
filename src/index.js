//import { TestWatcher } from 'jest';
//Simport { styleDisabled } from 'htmlhint';
import validator from './validator.js';

// Validacion de tarjeta
let creditCardNumber=document.getElementById("creditCardNumber");
let ccValidator=document.getElementById("ccValidator");
let enviarBtn=document.getElementById("button");
let comprarA=document.getElementById("comprarA");
let comprarB=document.getElementById("comprarB");
let comprarC=document.getElementById("comprarC");
let comprarD=document.getElementById("comprarD");

enviarBtn.addEventListener('click', ()=>{
  let message=document.getElementById("message");
  if (creditCardNumber.value===0||creditCardNumber.value<16){
    message="Ingrese el número de tarjeta";
    ccValidator.textContent=message;
  } else {
    if (validator.isValid(creditCardNumber.value)===true){
       message="Tarjeta de credito válida";
      } else {
        message="Tarjeta de credito no válida";
      } 
    }
//Maskify número de tarjeta
 let nMaskify = validator.maskify(creditCardNumber.value);
 ccValidator.innerText = " " + nMaskify + " " +  message

});
 
//Boton "comprar libro" con id= div1 envia a la pagina de validación de tarjeta con id= div2
comprarA.addEventListener("click", ()=>{
  document.getElementById("div1").style.display = "none";
  document.getElementById("div2").style.display = "block";
})
comprarB.addEventListener("click", ()=>{
  document.getElementById("div1").style.display = "none";
  document.getElementById("div2").style.display = "block";
})
comprarC.addEventListener("click", ()=>{
  document.getElementById("div1").style.display = "none";
  document.getElementById("div2").style.display = "block";
})
comprarD.addEventListener("click", ()=>{
  document.getElementById("div1").style.display = "none";
  document.getElementById("div2").style.display = "block";

})

//Boton Confirmar pago con id btnModal me abre una ventana modal 
if(document.getElementById("btnModal")){
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("btnModal");
  var span = document.getElementsByClassName("close")[0];
  var body = document.getElementsByTagName("body")[0];

  btn.onclick = function() {
    modal.style.display = "block";

    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
  }

  span.onclick = function() {
    modal.style.display = "none";

    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";

      body.style.position = "inherit";
      body.style.height = "auto";
      body.style.overflow = "visible";
    }
  }
}


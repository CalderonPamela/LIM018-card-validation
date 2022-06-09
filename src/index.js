//import { TestWatcher } from 'jest';
//Simport { styleDisabled } from 'htmlhint';
import validator from './validator.js';


let creditCardNumber=document.getElementById('creditCardNumber');
let ccValidator=document.getElementById('ccValidator');
let enviarBtn=document.getElementById('button');
let comprar=document.getElementById('comprar');

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

 let nMaskify = validator.maskify(creditCardNumber.value);
 ccValidator.innerText = " " + nMaskify + " " +  message;

});
 
comprar.addEventListener('click', ()=>{
  document.getElementById("div1").style.display = "none";
  document.getElementById("div2").style.display = "block";

})


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

let btnSeguir=document.getElementById('btnSeguir');
btnSeguir.addEventListener('click', ()=>{
  document.getElementById("div1").style.display = "block";
  document.getElementById("div2").style.display = "none";
})

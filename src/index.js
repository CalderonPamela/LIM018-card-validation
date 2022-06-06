//import { TestWatcher } from 'jest';
//Simport { styleDisabled } from 'htmlhint';
import validator from './validator.js';



let creditCardNumber=document.getElementById('creditCardNumber');
let ccValidator=document.getElementById('ccValidator');
let enviarBtn=document.getElementById('button');


//console.log(enviarBtn)
enviarBtn.addEventListener('click', ()=>{
  //debugger para probar 

  let message=document.getElementById("message");
  if (creditCardNumber.value===0||creditCardNumber.value<16){
    message="Ingrese numero de tarjeta";
    ccValidator.textContent=message;
  } else {

    if (validator.isValid(creditCardNumber.value)===true){
      message="Tarjeta de credito válida";
      } else {
      message="Tarjeta de credito no válida";
      
      }
      ccValidator.textContent=message;
    }

 // let maskify=validator.maskify(creditCardNumber);

 let nMaskify = validator.maskify(creditCardNumber.value);
 ccValidator.innerText = "¡Tu tarjeta número " + nMaskify + " " +  message;

});
 
let comprar=document.getElementById('comprar');

comprar.addEventListener('click', ()=>{
  document.getElementById("div1").style.display = "none";
  document.getElementById("div2").style.display = "block";

})


//console.log(validator.isValid(creditCardNumber.value));






//import { TestWatcher } from 'jest';
import validator from './validator.js';


let creditCardNumber=document.getElementById('creditCardNumber');
let ccValidator=document.getElementById('ccValidator');
let enviarBtn=document.getElementById('button')
//console.log(enviarBtn)
enviarBtn.addEventListener('click', ()=>{

  let message=document.getElementById("message");
  if (creditCardNumber.value===""){
    message="Ingrese numero de tarjeta";
  } else {

    if (validator.isValid(creditCardNumber.value)===true){
      message="Tarjeta de credito válida";
      } else {
      message="Tarjeta de credito no válida";
      ccValidator.textContent=message;
      }
    }
    
  });


console.log(validator.isValid(creditCardNumber.value));






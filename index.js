//import { TestWatcher } from 'jest';
//Simport { styleDisabled } from 'htmlhint';
import validator from './validator.js';

function mostrarDiv1(){
  document.getElementById('div1').style.display = 'none';
  document.getElementById('div2').style.display = 'block';
}
function mostrarDiv2(){
  document.getElementById('div1').style.display = 'block';
  document.getElementById('div2').style.display = 'none';
}






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

  let maskify=validator.maskify(creditCardNumber);

    result.innerText = "¡Tu tarjeta número " + nMaskify + " " + textR;
  div1.style.display = "none";
 div2.style.display = "block";
});
 


//console.log(validator.isValid(creditCardNumber.value));






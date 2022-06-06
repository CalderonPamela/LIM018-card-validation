const validator = { 
  // ...
isValid: function(creditCardNumber){
  const array=creditCardNumber.split('').reverse();

  const newarray=[]
  for(var i=0;i<array.length;i++){
    if(i%2!=0){
      var multiplication=array[i]*2;
      if(multiplication>9){
        var convertString=multiplication.toString();
        var result=parseInt(convertString.charAt(0))+parseInt(convertString.charAt(1));
        newarray.push(result);
      }else{
        newarray.push(multiplication);
      }
    }else{
      newarray.push(array[i]);
    }
  }
  var additions=0;
  for(i=0;i<newarray.length;i++){
    additions=additions+parseInt(newarray[i]);
  }
  if(additions%10==0){
    return true;
  }else{
    return false;
  }
},

maskify: (creditCardNumber) => {
  let maskify = "";
  for (let i = 0; i < creditCardNumber.length; i++) {
    if (i <= creditCardNumber.length - 5) {
      maskify = maskify + "#";
    } else {
      maskify = maskify + creditCardNumber[i];
    }
    //result.innerText = "¡Tu tarjeta número " + maskify + " es válida !";
  }

  return maskify;
},



/*maskify:function(creditCardNumber){
  let four=creditCardNumber.slice(0,creditCardNumber.length-4)
  let secondArray=[];
  for(var j=0;j<four.length;j++){
    secondArray.push("#");
  }
  let textComplete=secondArray.join("")+creditCardNumber.slice(-4);
  return textComplete;
}*/

};

 /* isValid: function(ccNumber){
    //const array=ccNumber.split('').reverse();
    const CClength = ccNumber.length;
    let count = 0;
  
    for(let i = 0; i < CClength; i++){
      let currentDigit = parseInt(ccNumber[i]);
  
      if ((i+2) % 2 == 0){
        if((currentDigit *=2) > 9){
         currentDigit -=9;
          count += currentDigit;
    }
  }
    return(count % 10) === 0;
  }
},*/


    /*("maskify", function(ccNumber){
    if (ccNumber.length > 4) {
      return ccNumber;
    } else {
      let last4 = '';
      for (let i = ccNumber.length - 4; i < ccNumber.length; i++) {
        last4 += ccNumber[i];
      }
      let maskify = '';
      for (let j = 0; j < ccNumber.length - 4; j++) {
        maskify += '#';
      }
      return maskify + last4;
    }
  })*/


/*
    maskify: function(creditCardNumber) {
    let starsString = creditCardNumber.slice(0, 4);
    let showNumbers = creditCardNumber.slice(-4);
    let regMe = /[0-9]/g;
    let allStars = starsString.replace(regMe, '*');
    console.log(allStars + showNumbers);
  },
     get maskify() {
       return this._maskify;
     },
     set maskify(value) {
       this._maskify = value;
     },*/


  export default validator;
  

  


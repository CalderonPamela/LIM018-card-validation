const validator = { 
  // ...
  isValid: function(ccNumber){
    const length = ccNumber.length;
    let count = 0;
  
    for(let i = 0; i < length; i++){
      let currentDigit = parseInt(ccNumber[i]);
  
      if ((i+2) % 2 == 0)
        if((currentDigit *=2) > 9)
         currentDigit -=9;
          count += currentDigit;
    }
    return(count % 10) === 0;
  }


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
};

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
  

  


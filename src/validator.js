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
  }
  return maskify;
},


};

  export default validator;
  
  


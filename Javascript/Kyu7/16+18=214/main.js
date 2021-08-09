function add(num1, num2) {
    var resNum1Splited=[];
    var resNum2Splited=[];
    var num1Splited,num2Splited;
    let result = [];

   num1Splited = num1.toString().split("");    
   num2Splited = num2.toString().split(""); 
   
   if(num1Splited.length<num2Splited.length){
     while (num1Splited.length<num2Splited.length) {
       num1Splited.unshift(0);
      }
    }
    else if(num1Splited.length>num2Splited.length){
       while(num1Splited.length>num2Splited.length){
        num2Splited.unshift(0);
      }
    }
    
    num1Splited.forEach((item)=>{resNum1Splited.push( parseInt(item))})
    num2Splited.forEach((item)=>{resNum2Splited.push( parseInt(item))})

   
  for (let i = 0; i < resNum1Splited.length; i++) {
    result.push(resNum1Splited[i]+resNum2Splited[i]);   
    
  }
 
  return parseInt(result.join(''));
 

}
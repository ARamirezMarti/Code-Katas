function cleanString(s) {
    let stringArr= s.split("");
    let finalString=[];
    stringArr.forEach((item,index)=>{
      if(item === '#'){
        finalString.splice((finalString.length-1),1)
      }else{
        finalString.push(item);
      }
    })
  
    return finalString.join("");
  
  };
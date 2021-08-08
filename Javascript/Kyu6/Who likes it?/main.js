function likes(names) {
  
    var countPeople= names.length;
    if(countPeople==0){
      return `no one likes this`
  
    }else if(countPeople==1){
      return `${names[0]} likes this`
    }else if(countPeople==2){
      return `${names[0]} and ${names[1]} like this`
    }
    else if(countPeople==3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
      
    }
    else if( countPeople>=4){
      return `${names[0]}, ${names[1]} and ${(names.length-2)} others like this`
  
    }
    
  
   
  }
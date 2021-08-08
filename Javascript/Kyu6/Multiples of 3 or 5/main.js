function solution(number){
    var sum= 0;
  
    for (let i = 0; i < number; i++) {
      let currentNumber = i;
      if((currentNumber%3)== 0 || (currentNumber%5)== 0){
       sum+=i;
      } 
    }
  
   return sum;
    
    
  }
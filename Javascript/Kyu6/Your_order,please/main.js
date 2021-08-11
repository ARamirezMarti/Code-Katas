function order(words){
    var numbers=['1','2','3','4','5','6','7','8','9']
    var ordered_array=[]

    split_string = words.split(' ')
    split_string.forEach(word => {
      
       for (let i = 0; i < numbers.length; i++) {
           if(word.includes(numbers[i])){
                ordered_array[numbers[i]]= word
           }
       }
    });
    return ordered_array.join(' ').trim()
  }



console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
/* console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), "", "empty input should return empty string" ) */
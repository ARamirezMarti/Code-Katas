function duplicateCount(text){
    var counter = {}
    var word_repeated_counter = 0;

    
    splited_string= Array.from(text.toLowerCase())

    /* For each word, create an new attribute with word value in counter object */
    splited_string.forEach(word => {
        counter[word] = 0
    
    });

    /* Check if each word in the string exist as an attribute in the object,if does we add +1 */
    splited_string.forEach(word_attribute => {
       
        if(word_attribute in counter){
            counter[word_attribute]+=1;
        }
      
    });

    /* For each attribute, if the value is 2 or more means that has been repeated.
     */
    for (const word_attribute in counter) {
        if(counter[word_attribute] >= 2){
            word_repeated_counter+=1;
        }
    }

   /* word_repeated_counter returns how many words has been repeated in the string */
    return word_repeated_counter
}

 console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0); 
console.log(duplicateCount("aabbcde"), 2);
 console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent") 

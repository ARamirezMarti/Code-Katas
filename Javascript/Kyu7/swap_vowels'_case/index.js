function swapVowelCase(str) {
    var upperVowels=['A','E','I','O','U'];
    var lowerVowels=['a','e','i','o','u'];
    var new_string='';

    if (str === ' ') {
      return '';
      
    }else{
      var splitted_string=Array.from(str);
      
      splitted_string.forEach(word => {

        var foundUpperCaseVowel=upperVowels.find( up_vowel => up_vowel === word)
        var foundLowerCaseVowel=lowerVowels.find( low_vowel => low_vowel === word)

        if(foundUpperCaseVowel !=undefined){
          new_string+=word.toLowerCase();
        }
        else if(foundLowerCaseVowel !=undefined){
          new_string+=word.toUpperCase();
        }
        else{
          new_string+=word;
        }
      });

    }

    return new_string
    
  }

console.log(swapVowelCase(" "), " ");
console.log(swapVowelCase("C Is AlIvE!"), "C is alive!");
console.log(swapVowelCase("to"), "tO");
console.log(swapVowelCase("The"), "ThE");
   

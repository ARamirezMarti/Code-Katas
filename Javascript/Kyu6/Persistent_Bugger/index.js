var num_steps=0;

function persistence(num){
    if ( num >= 10 ) {

        num_steps += 1; 
        splitted_num=Array.from(num.toString());

        reduced_num = splitted_num.reduce(function(ant_value, curr_value){
            return parseInt(ant_value) * parseInt(curr_value);
        });

        
        if (reduced_num >= 10) {            
            return persistence( reduced_num );

        }else{
            var returning_steps = num_steps;
            num_steps = 0;
            return returning_steps
        }

    }else{
        return 0;
    }
     
};

console.log(persistence(39),3); 
console.log(persistence(4),0);
console.log(persistence(25),2);
console.log(persistence(999),4); 

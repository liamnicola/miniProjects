function divide(low, high){
    for(var i = low; i <= high; i++){
        if(i % 3 == 0 ){
            console.log(i+"div3")
        }
    }
}

divide(3, 9);

/*alternatively 

function test_divisors(low, high) {
  
    // we'll store all numbers and strings within an array
    // instead of printing directly to the console
    var output = [];
    
    for (var i = low; i <= high; i++) {
      
      // simply store the current number in the output array
      output.push(i);
      
      // check if the current number is evenly divisible by 3
      if (i % 3 === 0) { output.push('div3'); }
      
    }
    
    // return all numbers and strings
    return output;
    
  }
  
  test_divisors(2, 10);

  */
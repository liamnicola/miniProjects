function sum(arr){
    //variable for final answer
    let total = 0;
    //loop the entire parent array
    for(i = 0; i < arr.length; i++){
        //loop through each child array
        for(x = 0; x < arr[i].length; x++){
            //add current number to final sum
            total += arr[i][x]
        }
    }
    return total
}
sum([[3, 2], [1], [4, 12]])

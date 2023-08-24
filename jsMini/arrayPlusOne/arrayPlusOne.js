function plusOne(arr){
    sum = 0;
    temp = 0;
    for(var i = 0; i < arr.length; i++){
        temp = arr[i] + 1;
        sum += temp;
    }
    return sum;
}
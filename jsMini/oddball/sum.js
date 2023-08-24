function oddball(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
            sum += arr[i]
        }
    }
    return sum;
}

oddball([1,2,3,4,5])
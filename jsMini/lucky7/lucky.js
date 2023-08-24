//write a function which takes an array of ints and returns true if any three consecutive elements sum to 7
function lucky7s(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] + arr[i + 1] + arr[i - 1] === 7){
            return true;
        } else {
            return false;
        }
    }
}

lucky7s([2,1,5,1,0])

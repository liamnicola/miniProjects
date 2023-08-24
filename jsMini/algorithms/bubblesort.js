//given an array of integers, sort the array

function sort(arr){
    //define swapped to see if positions moved during the for loop
    let swapped; //value will be undefined
    do {
        swapped = false
        for(let i = 0; i < arr.length - 1; i++){
            //if current array value is less than next array value - swap them
            if(arr[i]> arr[i+1]){
                let newVal = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = newVal
                swapped = true
            }
        }
    } while(swapped)
}
const arr =[10, 15, -16, 4, -6]
sort(arr)
console.log(arr);

/* Explain how bubble sort works
bubble sort repeata loop to compair values next to each other and will swap them if they are in the wrong order
it will start with the first element in the array and loop until no more swaps are to be done
*/
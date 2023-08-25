function flip(string){
    var flipped = "";
    for(let i = string.length - 1; i >= 0; i--){
        flipped += string[i];
    }
    return flipped
}

console.log(flip("liam"));
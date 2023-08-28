var maxDistance = function(colors) {
    //keep track of furthest distance
    let furthest = 0;
    for(let i = 0; i < colors.length; i++){
        // store current distance found
        let count = 0;
        for(let j = i + 1; j < colors.length; j++){
            if(colors[i] != colors[j]){
                // let count = distance of furthest color
                count = j - i;
            }
        }
        //if current count distance is larger, replace furthest value
        //then the loop continues at first for loop until all array values are looped
        if(count >= furthest){
            furthest = count
        }
    }
    return furthest
};

maxDistance([1,1,1,6,1,1,1])

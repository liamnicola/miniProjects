const words = ["one", "two", "three"];
let longest = "";

for(let i = 0; i < words.length; i++){
    if(words[i].length > longest.length){
        longest = words[i];
    }
}
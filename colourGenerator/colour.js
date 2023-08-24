const colours = ["green", "red", "blue", "purple", "pink"];
const btn = document.getElementById("colourButton");

btn.addEventListener('click', () => {
    //get random number for colour array selection
    const number = Math.floor(Math.random() * colours.length)
    console.log(number);
    document.body.style.backgroundColor = colours[number];

})


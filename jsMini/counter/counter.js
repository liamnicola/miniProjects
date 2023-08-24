let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract")
let displayClicks = document.querySelector(".count")
let val = document.querySelector(".inputNum")

let count = 0;

add.addEventListener('click', () => {
    count++
    displayClicks.innerHTML = count + val
})

subtract.addEventListener('click', () => {
    count--
    displayClicks.innerHTML = count
    
})

document.getElementById("reset").onclick = () => {
    count = 0
    displayClicks.innerHTML = count

}

/* OR USE document.getElementById("add").onclick = () => {
    count++
}
*/

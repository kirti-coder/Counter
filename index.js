// As soon as the user clicked the button "add people" 
//increment() function starts working in the background


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count=0

function increment(){
    count += 1;
    countEl.textContent = count
}

function save(){
    let savecount =count +" "+" - "
    countEl.textContent = 0
    count = 0
    saveEl.textContent += savecount
    console.log(savecount)
}


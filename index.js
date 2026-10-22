

//for click  plus button 
let numberBeads = document.getElementById("numbers-el")
let beads = 0


function counter(){
    beads= beads + 1
    numberBeads.textContent = beads
    console.log(numberBeads)

}

//for click  minus  button 

function counterminus(){
    beads= beads - 1
    
    numberBeads.innerText = beads
    console.log(numberBeads)

}


//for save button
let payersaveNumber= document.getElementById("payer-Sa")
let payer=0


function saver(){
    payer += 1
    payersaveNumber.innerText = payer
    numberBeads.textContent = 0
    beads = 0

}
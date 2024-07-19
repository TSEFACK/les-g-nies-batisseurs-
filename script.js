let liens  = document.querySelector("#liens")
console.log(liens);
let ouvre =  document.querySelector("#ouvre")
console.log(ouvre);

let ferme =  document.querySelector("#ferme")
console.log(ferme);

ouvre.addEventListener("click", ()=>{
    liens.classList.add("active")
})

ferme.addEventListener("click", ()=>{
    liens.classList.remove("active")
})
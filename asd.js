let box = document.querySelector("#box")
box.addEventListener("mousemove", mover)
function mover (event){
    let x = event.clientX
    let y = event.clientY
    let res = document.querySelector("#position")
    res.textContent = "Posição X: "+x+ "Posição Y: "+y
}
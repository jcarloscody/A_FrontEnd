document.querySelector('.tecla_pom').onclick = playSound


function playSound(id) {
    document.querySelector(id).play()
}


const listaDeTecla = document.querySelectorAll('.tecla')

cont=0
while (cont < listaDeTecla.length) {
    listaDeTecla[cont].onclick =  () => playSound('#som_tecla_pom')
    
    cont++
}
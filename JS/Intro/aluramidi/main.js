document.querySelector('.tecla_pom').onclick = playSound


function playSound(id) {
    document.querySelector(id).play()
}


const listaDeTecla = document.querySelectorAll('.tecla')

cont=0
while (cont < listaDeTecla.length) {
    const tecla = listaDeTecla[cont]
    const instrumento = tecla.classList[1]
    const instrumentoValue = `#som_${instrumento}`
    tecla.onclick =  () => playSound(instrumentoValue)
    cont++
}
document.querySelector('.tecla_pom').onclick = playSound


function playSound(id) {
   const audio = document.querySelector(id)
    if (audio.localName=== "audio") {
        console.log(audio.localName)
        audio.play()
    }
}


const listaDeTecla = document.querySelectorAll('.tecla')

cont=0
while (cont < listaDeTecla.length) {
    const tecla = listaDeTecla[cont]
    const instrumento = tecla.classList[1]
    const instrumentoValue = `#som_${instrumento}`
    tecla.onclick =  () => playSound(instrumentoValue)
    tecla.onkeydown = function (evento) {
        if (evento.code==="Space" || evento.code==="KeyA") {
            tecla.classList.add('ativa')
            playSound(instrumentoValue)
        }
    }
    tecla.onkeyup = ()=> tecla.classList.remove('ativa')
    cont++
}


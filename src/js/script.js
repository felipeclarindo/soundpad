// Criando função para tocar som
const tocarSom = (idelementoaudio) => {
    // Utilizando play para iniciar o audio
    document.querySelector(idelementoaudio).play();
}

// Pegando todas as teclas
const listaDeTeclas = document.querySelectorAll(".tecla"); 

// Adicionando loop for
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];
    const idAudio = `#som_${instrumento}`

    // Adicionando ouvidor de evento para click da tecla
    tecla.addEventListener("click", () => {
        tocarSom(idAudio);
    })

    tecla.onkeydown = (event) => {
        if (event.code === "Space" || event.code === "Enter") {
            tecla.classList.add("ativa");
        }
    }
    tecla.onkeyup = (event) => {
        if (event.code === "Space" || event.code === "Enter") {
            tecla.classList.remove("ativa");
        }
    } 
}
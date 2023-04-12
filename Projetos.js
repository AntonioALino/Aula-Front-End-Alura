const text = "Em construção..."; // o texto que será digitado

function typeWriter() {
    let i = 0;
    const typewriter = document.getElementById("typewriter");
    typewriter.innerHTML = ""; // limpa o texto anterior
    const typingLoop = setInterval(() => {
        if (i < text.length) {
            typewriter.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingLoop); // interrompe a animação
            setTimeout(typeWriter, 1000); // aguarda 1 segundo e reinicia
        }
    }, 100); // ajuste o tempo de pausa aqui
}

typeWriter(); // inicia a função

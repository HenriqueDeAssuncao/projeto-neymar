document.getElementById('btnAceitar').addEventListener("click", aceitar);
document.getElementById('btnRecusar').addEventListener("click", recusar);
document.getElementById('btnReiniciar').addEventListener("click", reiniciar);


let numeroNeymar = Math.floor(Math.random() * 11);

function aceitar() {
    document.getElementById('botoes').style.display = 'flex';
    document.getElementById('btnAceitar').style.display = 'none';
    document.getElementById('btnRecusar').style.display = 'none';
}

function enviarNum(numeroUsuario) {
    Number(numeroUsuario);
    document.getElementById('reacaoNeymar').style.display = 'flex';
    if (numeroUsuario != numeroNeymar) {
        document.getElementById('textoReacao').innerHTML = 'Você errou! Tente outra vez.';
    } else {
        document.getElementById('textoReacao').innerHTML = `Você acertou! O número correto era ${numeroNeymar}.`;
        document.getElementById('imgReacao').src = 'imagens/neymarDiz2.webp'
        document.getElementById('botoes').style.display = 'none';
        document.getElementById('btnReiniciar').style.display = 'block';
        document.getElementById('imagemNeymar').src = 'imagens/neymarFeliz.jpg'
        document.getElementById('textoInicio').innerHTML = 'Você me deixou muito orgulhoso. Parabéns!'
    }
}

function recusar() {
    window.alert('FERISTES O CORAÇÃO DE NEYMAR!')
    document.getElementById('textoInicio').innerHTML = 'Você me magoou profundamente, colega... &#x1F613';
    document.getElementById('btnRecusar').style.display = 'none';
    document.getElementById('imagemNeymar').src = "imagens/neymarTriste.webp";
}

function reiniciar() {
    window.location.reload();
}
document.getElementById('btnAceitar').addEventListener("click", aceitar);
document.getElementById('btnRecusar').addEventListener("click", recusar);
document.getElementById('btnReiniciar').addEventListener("click", reiniciar);


let numeroNeymar = Math.floor(Math.random() * 11);
let numerosUsuario = [];

function ocultarBotoes() {
    document.getElementById('botoes').style.display = 'none';
    document.getElementById('btnReiniciar').style.display = 'block';
}

function aceitar() {
    document.getElementById('botoes').style.display = 'flex';
    document.getElementById('btnAceitar').style.display = 'none';
    document.getElementById('btnRecusar').style.display = 'none';
}

function enviarNum(numeroUsuario) {
    numerosUsuario.unshift(numeroUsuario);
    document.getElementById('reacaoNeymar').style.display = 'flex';

    if (numerosUsuario.length==4) {
        ocultarBotoes();
        document.getElementById('imgReacao').src = 'imagens/neymarPerdeu.jpg';
        document.getElementById('textoReacao').innerHTML = `Você perdeu! O número correto era ${numeroNeymar}.`;
        document.getElementById('textoInicio').innerHTML = `Você perdeu!`;
        document.getElementById('imagemNeymar').src = 'imagens/neymarT2.jpg';
    }

    else if (numeroUsuario == numeroNeymar){
        ocultarBotoes();
        document.getElementById('textoReacao').innerHTML = `Você acertou! O número correto era ${numeroNeymar}.`;
        document.getElementById('textoInicio').innerHTML = 'Você me deixou muito orgulhoso. Parabéns!';
        document.getElementById('imgReacao').src = 'imagens/neymarDiz2.webp';
        document.getElementById('imagemNeymar').src = 'imagens/neymarFeliz.jpg';
    }

    else if (numeroUsuario != numeroNeymar) {
        document.getElementById('textoReacao').innerHTML = `Você errou! Tente outra vez. Restam ${4-numerosUsuario.length} tentativas.`;
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
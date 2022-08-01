let numerosUsuario = [];

function enviarNum(numeroUsuario) {
    Number(numeroUsuario);
    numerosUsuario.unshift(numeroUsuario);

    if (numeroUsuario != numeroNeymar) {
        document.getElementById('textoReacao').innerHTML = `Você errou. Tente outra vez! Restam ${3-numerosUsuario.length} tentativas.`;
    } 
    
    else if (numerosUsuario.length>=3) {
        ocultarBotoes();
        document.getElementById('textoReacao').innerHTML = `Você perdeu!`;
    }
    
    else {
        ocultarBotoes();
        document.getElementById('textoReacao').innerHTML = `Você acertou! O número correto era ${numeroNeymar}.`;
        document.getElementById('imgReacao').src = 'imagens/neymarDiz2.webp'
        document.getElementById('imagemNeymar').src = 'imagens/neymarFeliz.jpg'
        document.getElementById('textoInicio').innerHTML = 'Você me deixou muito orgulhoso. Parabéns!'
        
    }
}

function ocultarBotoes() {
    document.getElementById('botoes').style.display = 'none';
    document.getElementById('btnReiniciar').style.display = 'block';
}


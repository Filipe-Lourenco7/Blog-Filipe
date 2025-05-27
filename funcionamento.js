function resultado(mensagem, computador) {
    const opcoes = ['Pedra 🗿', 'Papel 📄', 'Tesoura ✂️'];
    const resultadoDiv = document.getElementById("resultadoJogo");
    resultadoDiv.innerHTML = `
        <p><strong>Computador escolheu:</strong> ${opcoes[computador]}</p>
        <p><strong>${mensagem}</strong></p>
    `;
}

function numeroAleatorio(min, max) {
    return (Math.random() * (max - min) + min).toFixed();
}

function Jogar() {
    const computador = numeroAleatorio(0, 2);
    const jogador = document.querySelector("select").selectedIndex;

    if ((computador == 0 && jogador == 2) ||
        (computador == 1 && jogador == 0) ||
        (computador == 2 && jogador == 1)) {
        resultado("Perdeu!", computador);
    }
    else if (computador == jogador) {
        resultado("Empatou!", computador);
    }
    else {
        resultado("Sortudo, você Venceu!", computador);
    }
}

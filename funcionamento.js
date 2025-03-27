function Jogar()
{
    const computador = numeroAleatorio(0,2);
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

function resultado(mensagem, computador) 
{
    const opcoes = ['Pedra 🗿', 'Papel 📄', 'Tesoura ✂️'];
    document.querySelector("h2").innerHTML = mensagem;
    document.querySelector("p").innerHTML = opcoes[computador];
}

function numeroAleatorio(min, max) {
    return (Math.random() * (max - min) + min).toFixed();
}

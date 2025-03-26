function Jogar()
{
    const computador = numeroAleatorio(0,2);
    const jogador = document.querySelector("select").selectedIndex;
    if ((computador == 0 && jogador == 2) ||
        (computador == 1 && jogador == 0) ||
        (computador == 2 && jogador == 1)) {
        resultado("<span style='font-size: 20px;'>Sou universitário de Análise e Desenvolvimento de Sistemas, cursando o 3º semestre.<br>Tenho estudado bastante e meu objetivo é me tornar um Dev Full-stack.<br>Para isso, faço diversos cursos na Coursera, estudando Back-end, Front-end e Dados.<br>Sei que é um caminho difícil, mas tenho força de vontade e sei que um dia me tornarei um Dev!<br>Este blog foi criado para que você possa acompanhar minha jornada. Aqui estão alguns dos meus projetos<br><span style='animation: slideIn 1.5s ease-in-out;'>Perdeu!</span></span>", computador);
    }
    else if (computador == jogador) {
        resultado("<span style='font-size: 20px;'>Sou universitário de Análise e Desenvolvimento de Sistemas, cursando o 3º semestre.<br>Tenho estudado bastante e meu objetivo é me tornar um Dev Full-stack.<br>Para isso, faço diversos cursos na Coursera, estudando Back-end, Front-end e Dados.<br>Sei que é um caminho difícil, mas tenho força de vontade e sei que um dia me tornarei um Dev!<br>Este blog foi criado para que você possa acompanhar minha jornada. Aqui estão alguns dos meus projetos<br><span style='animation: slideIn 1.5s ease-in-out;'>Empatou!</span></span>", computador);
    }
    else {
        resultado("<span style='font-size: 20px;'>Sou universitário de Análise e Desenvolvimento de Sistemas, cursando o 3º semestre.<br>Tenho estudado bastante e meu objetivo é me tornar um Dev Full-stack.<br>Para isso, faço diversos cursos na Coursera, estudando Back-end, Front-end e Dados.<br>Sei que é um caminho difícil, mas tenho força de vontade e sei que um dia me tornarei um Dev!<br>Este blog foi criado para que você possa acompanhar minha jornada. Aqui estão alguns dos meus projetos<br><span style='animation: slideIn 1.5s ease-in-out;'>Sortudo, você Venceu!</span></span>", computador);
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

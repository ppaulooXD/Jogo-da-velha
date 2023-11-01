var jogador;
var pontuacao;

function iniciarJogo() {
    jogador = 'X';

    pontuacao = [
        ['', '', ''],
        ['', '', '',],
        ['', '', '']
    ];


    document.getElementById('jogadorDoTurno').textContent = jogador;
    var quadros = document.querySelectorAll('.quadro');

    for (let quadro of quadros) {
        quadro.textContent = '';
        quadro.addEventListener('click', marcarQuadro);
    }
}

function marcarQuadro() {
    if (this.textContent == "") {
        this.textContent = jogador;

        var linha = this.dataset.linha - 1;
        var coluna = this.dataset.coluna - 1;
        pontuacao[linha][coluna] = jogador;
        conferirResultado()
        trocaJogador();
    }
}

function trocaJogador() {
    if (jogador == 'X') {
        jogador = 'O';
    }
    else {
        jogador = 'X';
    }
    document.getElementById('jogadorDoTurno').textContent = jogador;
}

function conferirResultado(){
    var possuiGanhador = false;

    for(var linha = 0; linha < 3; linha++)
    {
        if(pontuacao[linha][0] != '' && pontuacao[linha][1] != '' && pontuacao[linha][2] != '')
        {
            if(pontuacao[linha][0] == pontuacao[linha][1] && pontuacao[linha][0] == pontuacao[linha][2])
            {
                possuiGanhador = true;
            }
        }
    }

    for(var coluna = 0; coluna < 3; coluna++)
    {
        if(pontuacao[0][coluna] != '' && pontuacao[1][coluna] != '' && pontuacao[2][coluna] != '')
        {
            if(pontuacao[0][coluna] == pontuacao[1][coluna] && pontuacao[0][coluna] == pontuacao[2][coluna])
            {
                possuiGanhador = true;
            }
        }
    }

    if(pontuacao[0][0] != '' && pontuacao[1][1] != '' && pontuacao [2][2] != '')
    {
        if(pontuacao[0][0] == pontuacao[1][1] && pontuacao[0][0] == pontuacao[2][2])
        {
            possuiGanhador = true;
        }
    }

    if(pontuacao[2][0] != '' && pontuacao[1][1] != '' && pontuacao [0][2] != '')
    {
        if(pontuacao[2][0] == pontuacao[1][1] && pontuacao[2][0] == pontuacao[0][2])
        {
            possuiGanhador = true;
        }
    }

    if(possuiGanhador == true)
    {
        encerrarJogo();
    }
    
}

function encerrarJogo(){
    alert('Jogador ' + jogador + ' ganhou!');

    var quadros = document.querySelectorAll('.quadro');
    for(let quadro of quadros)
    {
        quadro.removeEventListener('click', marcarQuadro);
    }
}

iniciarJogo();
document.getElementById('reiniciar').addEventListener('click', iniciarJogo)
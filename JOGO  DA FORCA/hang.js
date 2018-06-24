(function () {
    "use strict";
    var letrasdisponiveis, palavras, chuteInput, chute, chuteBotao, letrasChutadas, letrasAcertadas, output, pessoa, letras, vidas, palavraAtual, numLetrasAcertadas, mensagens;

    function setup() {

        letrasdisponiveis = "abcdefghijklmnopqrstuvwxyz";
        vidas = 7;
        palavras = ["bola", "cachorro", "gatinho", "morte", "carro", "barco", "mario", "sonic", "ricardo"];
        mensagens = {
            vitoria: 'Voce Ganhou!',
            derrota: 'Perdeu !',
            chutada: 'Letra ja escolhida , tente novamente...',
            letrasdisponiveis: 'Apenas letras do nosso alfabeto , sem acento e sem cedilha'
        };


        letrasChutadas = letrasAcertadas = '';
        numLetrasAcertadas = 0;


        palavraAtual = palavras[Math.floor(Math.random() * palavras.length)];


        output = document.getElementById("output");
        pessoa = document.getElementById("pessoa");
        chuteInput = document.getElementById("letra");

        pessoa.innerHTML = 'Vc tem ' + vidas + ' vidas restantes';
        output.innerHTML = '';

        document.getElementById("letra").value = '';


        chuteBotao = document.getElementById("chute");
        chuteInput.style.display = 'inline';
        chuteBotao.style.display = 'inline';


        letras = document.getElementById("letras");
        letras.innerHTML = '<li class="palavraAtual">Palavra Atual:</li>';

        var letra, i;
        for (i = 0; i < palavraAtual.length; i++) {
            letra = '<li class="letra letra' + palavraAtual.charAt(i).toUpperCase() + '">' + palavraAtual.charAt(i).toUpperCase() + '</li>';
            letras.insertAdjacentHTML('beforeend', letra);
        }
    }

    function gameOver(vitoria) {
        if (vitoria) {
            output.innerHTML = mensagens.vitoria;
            output.classList.add('vitoria');
        } else {
            output.innerHTML = mensagens.derrota;
            output.classList.add('error');
        }

        chuteInput.style.display = chuteBotao.style.display = 'none';
        chuteInput.value = '';
    }

  
    window.onload = setup();


    document.getElementById("restart").onclick = setup;


    chuteInput.onclick = function () {
        this.value = '';
    };


    document.getElementById('enforcado').onsubmit = function (e) {
        if (e.preventDefault) e.preventDefault();
        output.innerHTML = '';
        output.classList.remove('error', 'warning');
        chute = chuteInput.value;


        if (chute) {

            if (letrasdisponiveis.indexOf(chute) > -1) {

                if ((letrasAcertadas && letrasAcertadas.indexOf(chute) > -1) || (letrasChutadas && letrasChutadas.indexOf(chute) > -1)) {
                    output.innerHTML = '"' + chute.toUpperCase() + '"' + mensagens.chutada;
                    output.classList.add("warning");
                }

                else if (palavraAtual.indexOf(chute) > -1) {
                    var letrasAMostrar;
                    letrasAMostrar = document.querySelectorAll(".letra" + chute.toUpperCase());

                    for (var i = 0; i < letrasAMostrar.length; i++) {
                        letrasAMostrar[i].classList.add("correto");
                    }


                    for (var j = 0; j < palavraAtual.length; j++) {
                        if (palavraAtual.charAt(j) === chute) {
                            numLetrasAcertadas += 1;
                        }
                    }

                    letrasAcertadas += chute;
                    if (numLetrasAcertadas === palavraAtual.length) {
                        gameOver(true);
                    }
                }

                else {
                    letrasChutadas += chute;
                    vidas--;
                    pessoa.innerHTML = 'Vc tem ' + vidas + ' vidas restantes';
                    if (vidas === 0) gameOver();
                }
            }

            else {
                output.classList.add('error');
                output.innerHTML = mensagens.letrasdisponiveis;
            }
        }

        else {
            output.classList.add('error');
            output.innerHTML = mensagens.letrasdisponiveis;
        }
        return false;
    };
}());
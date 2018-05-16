var JOQUEMPO = (function() {

    var 
        escolhaJogador, 
        escolhaComputador, 
        vencedor, 
        pontosJogador, 
        pontosComputador;

var setEscolhaJogador = function (escolha) {
        escolhaJogador = escolha;
    };

    var getEscolhaJogador = function () {
        return escolhaJogador;
    };

    var setEscolhaComputador = function (escolha) {
        escolhaComputador = escolha;
    };

    var getEscolhaComputador = function () {

        var escolhaComputador = Math.round(Math.random() * 2);
        switch (escolhaComputador) {
            case 0:
                escolhaComputador = 'pedra';
                break;
            case 1:
                escolhaComputador = 'papel';
                break
            case 2:
                escolhaComputador = 'tesoura';
                break;
        } 
        setEscolhaComputador(escolhaComputador);
        return escolhaComputador;

    };

    var getVencedor = function () {

        if (escolhaJogador == 'pedra') {

            if (escolhaComputador == 'pedra') {
                vencedor = 'empate';
            } else if (escolhaComputador == 'papel') {
                vencedor = 'computador';
            } else if (escolhaComputador == 'tesoura') {
                vencedor = 'jogador';
            }

        } else if (escolhaJogador == 'papel') {

            if (escolhaComputador == 'pedra') {
                vencedor = 'jogador';
            } else if (escolhaComputador == 'papel') {
                vencedor = 'empate';
            } else if (escolhaComputador == 'tesoura') {
                vencedor = 'computador';
            }

        } else if (escolhaJogador == 'tesoura') {

            if (escolhaComputador == 'pedra') {
                vencedor = 'computador';
            } else if (escolhaComputador == 'papel') {
                vencedor = 'jogador';
            } else if (escolhaComputador == 'tesoura') {
                vencedor = 'empate';
            }

        } 
 if (vencedor == 'jogador') {
            if (getPontosJogador() != null) {
            	setPontosJogador(getPontosJogador() + 1);	
            } else {
            	setPontosJogador(1);
            }            
        } else if (vencedor == 'computador') {
        	if (getPontosComputador() != null) {
            	setPontosComputador(getPontosComputador() + 1);	
            } else {
            	setPontosComputador(1);
            } 
        }         

        return vencedor;

    };
    
    var getPontosComputador = function () {
    	return pontosComputador;
    };
    
    var setPontosComputador = function  (pontos) {
    	pontosComputador = pontos;
    };
    
    var getPontosJogador = function  () {
    	return pontosJogador;
    };
    
    var setPontosJogador = function  (pontos) {
    	pontosJogador = pontos;
    };

    return {
        setEscolhaJogador : setEscolhaJogador,
        getEscolhaComputador : getEscolhaComputador,
        getVencedor : getVencedor,
        setPontosComputador: setPontosComputador,
		setPontosJogador: setPontosJogador,
        getPontosComputador: getPontosComputador,
		getPontosJogador: getPontosJogador
    };

})();

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

(function(){



    JOQUEMPO.setPontosComputador(0);
    JOQUEMPO.setPontosJogador(0);

    document.getElementById("btn-action").onclick = function () {

        var escolhaJogador = document.getElementById("opcaojogador").value;
        
        if (escolhaJogador == '') {
            alert('Opção Invalida ! Escolha outra !');
            return false;
        }
        
        document.getElementById("cmp-jogador").innerHTML = capitalizeFirstLetter(escolhaJogador);
        JOQUEMPO.setEscolhaJogador(escolhaJogador);
        document.getElementById("cmp-computador").innerHTML = capitalizeFirstLetter(JOQUEMPO.getEscolhaComputador());
        document.getElementById("cmp-vencedor").innerHTML = capitalizeFirstLetter(JOQUEMPO.getVencedor());
		document.getElementById("placar-jogador").value = JOQUEMPO.getPontosJogador();
        document.getElementById("placar-computador").value =  JOQUEMPO.getPontosComputador();
	
    };
    
})();

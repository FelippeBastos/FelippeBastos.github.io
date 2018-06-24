window.onload

function calcular(){
	var capital = document.getElementById("capital").value;
	var tempo = document.getElementById("tempo").value;
	var juros = document.getElementById("juros").value / 100;
	var montante = 0;
	var final = 0;
	var x;

	for(x=1; x<=tempo; x++){
		montante = capital*(Math.pow(1+juros, x));
		montante = montante.toFixed(2);
		h = document.createElement("p")
		t = document.createTextNode("Mes " + x + ':R$' + montante);
		h.appendChild(t);
		document.getElementById("resultado").appendChild(h);
		
		}

		final = montante - capital;
		final = final.toFixed(2);
		porcertagem = (final*100)/capital;
		porcertagem = porcertagem.toFixed(2);
		document.getElementById("rend1").value = "R$" + (final)
		document.getElementById("rend2").value = "%" + (porcertagem)		
}
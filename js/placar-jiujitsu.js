function reiniciar(){
	var r = confirm("Deseja reiniciar o placar?");
	if (r==true){
		location.reload();
	}
}

function start(){

	document.getElementById("tempo_select").className = 'hide';

	x = document.getElementById("controle");
	controle = x.textContent;	

	if(controle=='stop'){

		document.getElementById("controle_button").innerHTML="Pausar";
		document.getElementById("controle").innerHTML=("start");
		cronometro();
		return 0;
	}


	if(controle=='start'){

		document.getElementById("controle_button").innerHTML="Continuar";
		document.getElementById("controle").innerHTML=("stop");
		cronometro();
		return 0;
	}


}
function cronometro(){	             

	x = document.getElementById("controle");
	controle = x.textContent;	

	if(controle=='start'){

		tempo = document.getElementById("tempo").textContent;

		console.log(tempo);
		minuto = Number(tempo.substring(0,2));
		segundo = Number(tempo.substring(3,5));

		if(minuto==1 && segundo==00){
			minuto=0;
			segundo=60;
		}
	    if(minuto>0 && segundo==0){
	 		minuto = minuto-1;
		}

		if(segundo==0 && minuto>0) segundo=60;
	    if(segundo>0) segundo = segundo -1;


		if(minuto<10){
	   		minuto = '0'+minuto;
	   	}
		if(segundo<10){
	   		segundo = '0'+segundo;
	  	}


	   document.getElementById("tempo").innerHTML= minuto+":"+segundo;

	   console.log(minuto+':'+segundo); 

	  	if (minuto==0 && segundo==0){
	  		alert("Tempo Acabou!");
	  	}else{
	  		setTimeout(cronometro, 1000);
	  	}

	}
	return 0;

}     

function tempo_luta(tempo){


	document.getElementById("controle_button").className = 'waves-effect waves-light btn';

	if (tempo<10){tempo = '0'+tempo}
	var x = document.getElementById("tempo").innerHTML = tempo+':00';
}




function pontos(atleta, pontos){

	var indice;

	switch(pontos){
		case 1:
			indice = 'd';
			break;
		case 2:
			indice = 'c';
			break;
		case 3:
			indice = 'b';
			break;
		case 4:
			indice = 'a';
			break;
		case -1:
			indice = 'd';
			break;
		case -2:
			indice = 'c';
			break;
		case -3:
			indice = 'b';
			break;
		case -4:
			indice = 'a';
			break;

		case 11:
			indice = 'e';
			pontos = 1;
			break;
		case -11:
			indice = 'e';
			pontos = -1;
			break;
	}

	btn = document.getElementById("pt"+atleta+"-"+indice).textContent;
	calcular = Number(btn) + pontos;

	if (calcular >= 0){
		document.getElementById("pt"+atleta+"-"+indice).innerHTML = calcular;
	}

	total(atleta);

}



function total(atleta){
	a = document.getElementById("pt"+atleta+"-a").textContent;
	b = document.getElementById("pt"+atleta+"-b").textContent;
	c = document.getElementById("pt"+atleta+"-c").textContent;

	soma=(Number(a)+Number(b)+Number(c));
	console.log("Total do atleta "+atleta+": "+soma);


	document.getElementById("tp"+atleta).innerHTML = soma;
}


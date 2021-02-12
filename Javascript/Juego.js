//CONSTANTES
const PATO_NORMAL=1000;
const PATO_ESPECIAL=5000;
const PATO_NEGRO=1000;

//VARIABLES
let patos = ["pato1","pato2","pato3","pato4","pato5","pato6","pato7",
			"pato8","pato9","pato10","pato11","pato12","pato13",
			"pato14","pato15"];
var fallos =0;
var puntos =0;
var balas =6;
var i =3;
var tiempo =4;
var tiempomili = 2000;
var tiempomilireloj = 1000;
var cantPatos=10;
var Reloj=25;
var mute=0;

//METODOS
function Carga(){	
	document.getElementById("modoNormal").style.display="none";
	document.getElementById("modoHard").style.display="none";
	document.getElementById("modoFancy").style.display="none";
	document.getElementById("seleccion").innerHTML="Modo Novato";
	if(i==0){
		mostrarJuego();
	}
	document.getElementById("cuenta").innerHTML=i;
	i --;
	setTimeout(Carga, 500);
}

function CargaHard(){	
	document.getElementById("modoNormal").style.display="none";
	document.getElementById("modoHard").style.display="none";
	document.getElementById("modoFancy").style.display="none";
	document.getElementById("seleccion").innerHTML="Modo #~·#";
	document.getElementById("pato1").src="img/Joan.png";
	document.getElementById("pato2").src="img/Joan.png";
	document.getElementById("pato3").src="img/Joan.png";
	document.getElementById("pato4").src="img/Joan.png";
	document.getElementById("pato5").src="img/Joan.png";
	document.getElementById("pato6").src="img/Joan.png";
	document.getElementById("pato7").src="img/Joan.png";
	document.getElementById("pato8").src="img/Joan.png";
	document.getElementById("pato9").src="img/Joan.png";
	document.getElementById("pato10").src="img/JoanEspecial.png";
	document.getElementById("pato11").src="img/JoanEspecial.png";
	document.getElementById("pato12").src="img/JoanEspecial.png";
	document.getElementById("pato13").src="img/JoanEspecial.png";
	document.getElementById("pato14").src="img/JoanNegro.png";
	document.getElementById("pato15").src="img/JoanNegro.png";
	document.getElementById("juego").style.backgroundColor="brown";
	tiempomili=500;
	tiempomilireloj=200;
	if(i==0){
		mostrarJuego();
	}
	document.getElementById("cuenta").innerHTML=i;
	i --;
	setTimeout(CargaHard, 200);
}

function CargaFancy(){
	document.getElementById("modoNormal").style.display="none";
	document.getElementById("modoHard").style.display="none";
	document.getElementById("modoFancy").style.display="none";
	document.getElementById("seleccion").innerHTML=":D";
	document.getElementById("juego").style.backgroundColor="pink";
	
	tiempomili=4000;
	tiempomilireloj=1500;
	if(i==0){
		mostrarJuego();
	}
	document.getElementById("cuenta").innerHTML=i;
	i --;
	setTimeout(CargaFancy, 1500);
}


function reloj(){
	if(Reloj==-1){
		final();
	}
	document.getElementById("reloj").innerHTML="00:"+Reloj;
	Reloj--;
	setTimeout(reloj, tiempomilireloj);
}

function mostrarJuego(){
	reloj();
	document.getElementById("espera").style.display="none";
	document.getElementById("Fallos").innerHTML="Fallos: "+fallos;
	document.getElementById("Balas").innerHTML="Balas: "+balas;
	document.getElementById("Puntos").innerHTML="Puntos: "+puntos;
	document.getElementById("juego").style.display="block";
	document.getElementById("menu").style.display="block";
	volverMira();
	volarPatos();

}

function final(){
	document.getElementById("juego").style.display="none";
	document.getElementById("menu").style.display="none";
	document.getElementById("final").style.display="block";
	document.getElementById("textoFinal").innerHTML="TIEMPOO!";
	document.getElementById("puntuacionFinal").innerHTML=puntos+" PatoPuntos ";
	document.getElementById("falloFinal").innerHTML=fallos+" Fallos ";
}

function sumarPuntosN(){
	if(balas!=0){
		puntos += PATO_NORMAL;
		document.getElementById("matar").volume=1;
		document.getElementById("matar").play();
		document.getElementById("Puntos").innerHTML="Puntos: "+puntos;
	}
}

function sumarPuntosE(){
	puntos += PATO_ESPECIAL;
	document.getElementById("matarEspecial").volume=1;
	document.getElementById("matarEspecial").play();
	document.getElementById("Puntos").innerHTML="Puntos: "+puntos;
}

function restarPuntos(){
	puntos -= PATO_NEGRO;
	document.getElementById("matarNegro").volume=1;
	document.getElementById("matarNegro").play();
	document.getElementById("Puntos").innerHTML="Puntos: "+puntos;
}

function disparar(){
	if(balas==1){
		recargar();
	} else{
	balas -= 1;
	document.getElementById("juego").style.cursor="url(img/Disparo.png) 16 16, auto";
	document.getElementById("disparo").volume=0.1;
	document.getElementById("disparo").play();
	document.getElementById("Balas").innerHTML="Balas: "+balas;
	setTimeout(volverMira,200);
	}
}

function recargar(){
	balas=6;
	document.getElementById("juego").style.cursor="url(img/Recargando.png) 16 16, auto";
	document.getElementById("Balas").innerHTML="Balas: "+balas;
	document.getElementById("recargar").volume=1;
	document.getElementById("recargar").play();
	setTimeout(volverMira,1000);
}

function volverMira(){
	document.getElementById("juego").style.cursor="url(img/Mira.png) 16 16, auto";
}

function volverFondo(){
	document.getElementById("juego").style.backgroundColor="#1E93D6"
}

function fallo(){
	if(balas!=0){
		fallos ++;
		document.getElementById("Fallos").innerHTML="Fallos: "+fallos;
		document.getElementById("juego").style.backgroundColor="red";
		setTimeout(volverFondo, 100);
	}
	disparar();
}

function ocultar(a){
	a.style.display="none";
}


function volarPatos(){
	if(puntos>=0){
		pato=[Math.floor(Math.random()*15)+0];
		document.getElementById(patos[pato]).style.display="block";
	}
	setTimeout(volarPatos,tiempomili);
}

function Volumen(){
	
	if(mute==1){
		document.getElementById("BMute").src="img/Muteado.png";
		document.getElementById("cancion").volume=0;
		mute=0;
	} else if (mute==0){
		document.getElementById("BMute").src="img/Desmuteado.png";
		document.getElementById("cancion").volume=0.05;
		document.getElementById("cancion").play();
		mute=1;
	}
}

 
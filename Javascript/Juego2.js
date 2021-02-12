//VARIABLES
var suE= Math.floor(Math.random()*3)+1;
var vic=0;
var i;


//METODOS
function empezar(){
    ocultarMenu();
    document.getElementById("ppt").style.display="block";
    document.getElementById("puntos").style.display="block";
    document.getElementById("puntos").innerHTML="Puntos: "+vic;
}

function ocultarMenu(){
    document.getElementById("logo").style.display="none";
    document.getElementById("modo").style.display="none";
    document.getElementById("go").style.display="none";
}

function empate(){
    document.getElementById("versusp").innerHTML="EMPATE";
    document.getElementById("versusp").style.color="#00e5ff";
    document.getElementById("PPT").style.backgroundColor="blue";
}
function ganar(){
    document.getElementById("versusp").innerHTML="VICTORIA";
    document.getElementById("versusp").style.color="#22f5cb";
    document.getElementById("PPT").style.backgroundColor="green";
    vic++;
    document.getElementById("puntos").innerHTML="Puntos: "+vic;
}
function perder(){
    document.getElementById("versusp").innerHTML="DERROTA";
    document.getElementById("versusp").style.color="#27032e";
    document.getElementById("PPT").style.backgroundColor="red";
}

function terminarJuego(){
    document.getElementById("logo").style.display="block";
    document.getElementById("modo").style.display="block";
    document.getElementById("una").style.display="block";
    document.getElementById("UNA").style.display="block";
    document.getElementById("tres").style.display="block";
    document.getElementById("TRES").style.display="block";
    document.getElementById("versus").style.display="none";
}

function quienGana(a){
    document.getElementById("ppt").style.display="none";
    document.getElementById("versus").style.display="block";
    document.getElementById("versus").style.display="block";
    if(suE==a){
        empate();
    }else if(suE==3 && a==2){
        perder();
    }else if(suE==3 && a==1){
        ganar();
    }else if(suE==2 && a==3){
        ganar();
    }else if(suE==2 && a==1){
        perder();
    }else if(suE==1 && a==3){
        perder();
    }else if(suE==1 && a==2){
           ganar();
    }
    if(suE==1){
        document.getElementById("suE").src="Imagenes/PiedraE.png";
    } else if(suE==2){
        document.getElementById("suE").src="Imagenes/PapelE.png"
    } else{
        document.getElementById("suE").src="Imagenes/TijeraE.png"
    }
    if(a==1){
        document.getElementById("tuE").src="Imagenes/Piedra.png";
    } else if(a==2){
        document.getElementById("tuE").src="Imagenes/Papel.png"
    } else{
        document.getElementById("tuE").src="Imagenes/Tijera.png"     
    }
    jugarVeces--;
    if(jugarVeces==3 && vic==2 || jugarVeces==1 && vic==1){
        document.getElementById("otra").src="Imagenes/victoria.png";
        terminar=1;
    }
}

function vj(){
    if(terminar==1){
        terminarJuego();
    }
    document.getElementById("versus").style.display="none";
    document.getElementById("ppt").style.display="block";
    document.getElementById("otra").style.display="none";
}
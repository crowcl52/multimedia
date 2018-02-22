
var audio = document.getElementById("audio1");
var volumen = 100;
var speak = document.getElementById("vol");
speak.innerHTML = volumen;
var play = document.getElementById("play");
var pausa = document.getElementById("pausa");

pausa.style.display = "none";

function playPause() { 
    if (audio.paused){
        audio.play(); 
        pausa.style.display = "block";
        play.style.display = "none"; 
    } 
    else{
        audio.pause();
        pausa.style.display = "none";
        play.style.display = "block";
    } 
}

function adelante(){
    var maxduracion = audio.duration;
    var duracion = audio.currentTime;
    if(duracion+10 < maxduracion){
        audio.currentTime += 10;
    }
    
}

function atras(){
    var maxduracion = audio.duration;
    var duracion = audio.currentTime;
    if(duracion-10 > 0){
        audio.currentTime -= 10;
    }
}

function volP(){
    if(audio.volume < 1){
        audio.volume += .1
        volumen += 10;
        speak.innerHTML = volumen;
    }
    
}

function volM(){
    if(audio.volume > .1){
        audio.volume -= .1
        volumen -= 10;
        speak.innerHTML = volumen;
    }
    
}

function setVideo(video){
    audio.src = 'assets/audio/'+video+'.mp3';
}
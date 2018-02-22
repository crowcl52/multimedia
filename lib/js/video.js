
var myVideo = document.getElementById("myVideo");
var volumen = 100;
var speak = document.getElementById("vol");
speak.innerHTML = volumen;
var play = document.getElementById("play");
var pausa = document.getElementById("pausa");

pausa.style.display = "none";

function playPause() { 
    if (myVideo.paused){
        myVideo.play(); 
        pausa.style.display = "block";
        play.style.display = "none"; 
    } 
    else{
        myVideo.pause();
        pausa.style.display = "none";
        play.style.display = "block";
    } 
}

function adelante(){
    var maxduracion = myVideo.duration;
    var duracion = myVideo.currentTime;
    if(duracion+10 < maxduracion){
        myVideo.currentTime += 10;
    }
    
}

function atras(){
    var maxduracion = myVideo.duration;
    var duracion = myVideo.currentTime;
    if(duracion-10 > 0){
        myVideo.currentTime -= 10;
    }
}

function volP(){
    if(myVideo.volume < 1){
        myVideo.volume += .1
        volumen += 10;
        speak.innerHTML = volumen;
    }
    
}

function volM(){
    if(myVideo.volume > .1){
        myVideo.volume -= .1
        volumen -= 10;
        speak.innerHTML = volumen;
    }
    
}

function setVideo(video){
    myVideo.src = 'assets/videos/'+video+'.mp4';
}
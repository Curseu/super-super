leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet= ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}
function modelloaded(){
    console.log("posenet is ready to go!");
}
function draw(){
    image(video,0,0,600,500);
}
song=""

function preload(){
    song = loadSound("music.mp3")
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotposes(results){
    if(results.lenght>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        console.log("leftwristx= "+leftwristX+" leftwristY= "+leftwristY);

       
        rightwristX=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        console.log("rightwristx= "+rightwristX+" rightwristY= "+rightwristY);
    }
}




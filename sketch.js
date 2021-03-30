var canvas;
var music;
var surfaceRed, surfaceBlue, surfaceOrange, surfaceGreen;
var edges;
var box1;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    surfaceRed=createSprite(0,580,360,30);
    surfaceRed.shapeColor="red";

    surfaceBlue=createSprite(295,580,200,30);
    surfaceBlue.shapeColor="blue";
 
    surfaceOrange=createSprite(515,580,200,30);
    surfaceOrange.shapeColor="orange";

    surfaceGreen=createSprite(740,580,220,30);
    surfaceGreen.shapeColor="green";
    
    box1=createSprite(random(20,750), 100,40,40);
    box1.shapeColor="white";
    box1.velocityY=7;
    box1.velocityX=4;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    box1.bounceOff(edges);
   
    
  
    if(surfaceGreen.isTouching(box1) && box1.bounceOff(surfaceGreen)){
        box1.shapeColor="green";
        music.play(); 
    }
    if(surfaceBlue.isTouching(box1)){
        box1.shapeColor="blue";
        music.stop();
        box1.velocityX=0;
        box1.velocityY=0;
    }

    if(surfaceOrange.isTouching(box1) && box1.bounceOff(surfaceOrange)){
        box1.shapeColor="orange";
        music.play();
    }

    if(surfaceRed.isTouching(box1) && box1.bounceOff(surfaceRed)){
        box1.shapeColor="red";
        music.play();
    }
    drawSprites();
}

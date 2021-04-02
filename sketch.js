var canvas;
var edges;
var music;
var box;
var redPlat, greenPlat, bluePlat, yellowPlat;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces



    //create box sprite and give velocity
    box = createSprite(random(10,750),300,20,20);
    box.shapeColor="white";
    box.velocityX=3;
    box.velocityY=3;

    redPlat=createSprite(100,590,180,20);
    redPlat.shapeColor=rgb(255,0,0);
    
    greenPlat=createSprite(300,590,180,20);
    greenPlat.shapeColor=rgb(0,255,0);
    
    bluePlat=createSprite(500,590,180,20);
    bluePlat.shapeColor=rgb(0,0,255);
    
    yellowPlat=createSprite(700,590,180,20);
    yellowPlat.shapeColor=rgb(255,255,0);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);



    //add condition to check if box touching surface and make it box
    if(box.isTouching(redPlat) && box.bounceOff(redPlat))
    {
        box.shapeColor = rgb(255,0,0);
        music.play();
    }
    if(box.isTouching(greenPlat))
    {
        box.shapeColor = rgb(0,255,0);
        box.velocityX=0;
        box.velocityY=0; 
        music.stop();
    }
    if(box.isTouching(bluePlat) && box.bounceOff(bluePlat))
    {
        box.shapeColor = rgb(0,0,255);
        music.play();
    }
    if(box.isTouching(yellowPlat) && box.bounceOff(yellowPlat))
    {
        box.shapeColor = rgb(255,255,0);
        music.play();
    }

    drawSprites();
}

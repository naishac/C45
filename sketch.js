var monkey,monkeyImg;
var bg;
var rocket, rocketImg;
var moon, moonImg;
var radius;

function preload(){

bg = loadImage("sprites/SPACE.jpg");
monkeyImg = loadImage("sprites/SPACEMONKEY.png");
rocketImg = loadImage("sprites/ROCKET.png");
moonImg = loadImage("sprites/MOON.png");
}


function setup() {
  createCanvas(displayWidth, displayHeight-60);
 monkey= createSprite(400, 200, 50, 50);
 monkey.addImage(monkeyImg);
  monkey.scale = .3;

  rocket = createSprite(1150,330, 50, 50);
  rocket.addImage(rocketImg);
  rocket.scale = .5;
  rocket.rotation= -40;

  moon = createSprite(600,1000,50,50)
  moon.addImage(moonImg);
  moon.scale= 2.5;

  edges = createEdgeSprites();

  radius = moon.radius;
  moon.setCollider("circle",0,0,230);
  
}

function draw() {
  background(bg);  

  if(keyDown("DOWN_ARROW")){
    monkey.velocityY = monkey.velocityY+3;
  }

  if(keyDown("UP_ARROW")){
    monkey.y = monkey.y-2;
  }

  if(keyDown("RIGHT_ARROW")){
    monkey.x = monkey.x+3;
  }

  if(keyDown("LEFT_ARROW")){
    monkey.x = monkey.x-3;
  }

  monkey.bounceOff(edges);
  monkey.bounceOff(moon);

  drawSprites();
}
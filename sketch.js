var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

  car = createSprite(30,200,20,20);
  wall = createSprite(760,200,20.5,300);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
}

function draw() {
  background(211,211,211);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car .velocityX= 0;
    var deformation = 0.5*weight*speed*speed/22509
    if (deformation>180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
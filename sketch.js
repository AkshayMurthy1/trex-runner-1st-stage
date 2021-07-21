
var trex ,trex_running;
var ground;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(60,120)
  trex.addAnimation("running",trex_running);
  trex.scale=0.5
  ground=createSprite(300,180,600,20);
  ground.x=ground.width/2
  ground.velocityX=-10
  ground.addImage(groundImage)
  edges=createEdgeSprites()
  //create a trex sprite
}

function draw(){
  background("white")
  drawSprites();
  if(trex.velocityY==0){
if (keyDown("space")){
  trex.velocityY = -10;
}
  }
if (ground.x<0){
  ground.x=ground.width/2
}
trex.velocityY+=0.5;
trex.collide(ground);

}

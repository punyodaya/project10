
function preload(){
seaImg=loadImage("sea.png");
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,210,400,400)
  sea.addImage(seaImg)
  sea.velocityX=-3
  ship=createSprite(200,210,20,20)
  ship.addAnimation("moving ship",shipImg1)
  ship.scale=0.4
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=400/2
    
  }
  drawSprites()

}
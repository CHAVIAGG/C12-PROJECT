var path , invisibleGround , pathImage;
var runner , running ;

function preload(){
  //pre-load images
  path = loadImage("path.png");
  runner = loadImage("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(600,200);
  //create sprites here
  Runner = createSprite(50,180,20,50);
  Runner.addAnimation("runner");
  path = createSprite(200,180,400,20);
  path.addAnimation("path")
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(0);
drawSprites();
}

var fixedRect, movingRect;

var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect1 = createSprite(100,100,50,80);
  rect2 = createSprite(100,300,80,30);
}

function draw() {
  background(0,0,0); 
 rect2.x = mouseX;
 rect2.y = mouseY;
  bouncOff(movingRect, fixedRect);

if(isTouching(rect1,rect2)){
  rect1.shapeColor = "blue";
  rect2.shapeColor = "red";
}
else{
  rect1.shapeColor = "yellow";
  rect2.shapeColor = "yellow";
}


  
  drawSprites();
}

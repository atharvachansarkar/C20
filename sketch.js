var fixedrect,movingrect


function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(400, 100, 50, 80);
 movingrect = createSprite(400,300,80,30)

 fixedrect.shapeColor = "blue"
 movingrect.shapeColor = "blue"

 movingrect.debug = true
 fixedrect.debug = true

 fixedrect.velocityY = 4
 movingrect.velocityY =-4
}

function draw() {
  background(0);  

//movingrect.x = World.mouseX
//movingrect.y = World.mouseY

if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 && 
  fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
  movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
  fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2 )
  {
  fixedrect.velocityY = fixedrect.velocityY - 4
  movingrect.velocityY = movingrect.velocityY + 4
  movingrect.shapeColor = "red"
  fixedrect.shapeColor = "red"
} else{
  fixedrect.shapeColor = "blue"
  movingrect.shapeColor = "blue"
}



  drawSprites();
}
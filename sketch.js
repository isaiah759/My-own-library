var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
  fixedrect=createSprite(200,200,100,100);
  movingrect.shapeColor="blue";
  fixedrect.shapeColor="blue";
 
}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(isTouching(movingrect,fixedrect))
  {
    movingrect.shapeColor="yellow";
    fixedrect.shapeColor="yellow";
   
  }else{
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";
   
  }
  drawSprites();

}


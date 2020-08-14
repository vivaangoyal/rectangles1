var movinngrect,fixedrect;
var gameobject1,gameobject2;
function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(400, 200, 50, 50);
fixedrect = createSprite(30,200,30,10);
movingrect.shapeColor = "blue";
fixedrect.shapeColor = "white";
gameobject1 = createSprite(200,200,134,49);
gameobject2 = createSprite(1178,234,12,75);
gameobject1.shapeColor = "red";
gameobject2.shapeColor = "purple";
}

function draw() {
  background(0);  
movingrect.x = World.mouseX;
movingrect.y = World.mouseY;
if(isTouching(movingrect,gameobject1)){
movingrect.shapeColor = "yellow";
gameobject1.shapeColor = "yellow"
}
else{
movingrect.shapeColor = "blue";
gameobject1.shapeColor = "red";
}
  drawSprites();
}

function isTouching(object1,object2){
if(object1.x - object2.x < object1.width/2 + object2.width/2&&
object2.x - object1.x < object1.width/2 + object2.width/2&&
object1.y - object2.y< object1.height/2 + object2.height/2&&
object2.y - object1.y<object1.height/2 + object2.height/2){
 return true

}
else {
return false
}
}



var box;
function setup() {
  createCanvas(400,400);
box = createSprite(200,200,20,20);
background("black");
}

function draw() 
{
if (keyDown("right"))
{
  box.x = box.x + 2;
  background("red");
}
drawSprites();
}





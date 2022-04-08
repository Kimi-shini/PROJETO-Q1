var valt;
function setup() {
  createCanvas(400,400);
  valt = createSprite(200,200,22,22);
  valt.shapeColor = "orange";
}

function draw() 
{
  background(30);

  if (keyIsDown(RIGHT_ARROW)) {
     valt.x = valt.x + 4
  }

  if (keyIsDown(LEFT_ARROW)) {
     valt.x = valt.x - 4
  }
  if (keyIsDown(UP_ARROW)) {
     valt.y = valt.y - 4
  }
  if (keyIsDown(DOWN_ARROW)) {
     valt.y = valt.y + 4
  }

  drawSprites();

}





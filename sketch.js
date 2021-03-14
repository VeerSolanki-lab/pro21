var wall,thickness;
var bullet,speed,wieght;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(400,200,30,2);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  speed=random(223,321);
  wieght=random(30,52);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);
  if (hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*wieght*speed*speed/(thickness*thickness*thickness);

if (damage>10){
  wall.shapeColor=color(225,0,0);
}
if (damage<10)
{
  wall.shapeColor=color(0,225,0);
}

  }
  


  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var fairy,fairyImage;
var star,starImage;
var sky,skyImage;




function preload()
{
   //preload the images here

   fairyImage = loadAnimation("fairy1.png","fairy2.png");
   starImage = loadImage("star.png");
   skyImage = loadImage("starnight.png");

}

function setup() {
  createCanvas(800, 570);

  myEngine = Engine.create();
  myWorld = myEngine.world;


  sky = createSprite(200,25);
  sky.addImage("night",skyImage);
  

  fairy = createSprite(100,450,30,35);
  fairy.addAnimation("fly",fairyImage);
  fairy.scale = 0.2;

  star = createSprite(500,100,20,20);
  star.addImage("star",starImage);
  star.scale = 0.2;

  starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
  World.add(myWorld,starBody)
}


function draw() {
  background("black");
 
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  Engine.update(myEngine);
     
  if(star.y > 450 && starBody.position.y > 450 ){
  	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();
}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 20;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 20;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
}


    

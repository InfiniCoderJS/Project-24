var paperBall
var ground, groundAsWall1, groundAsWall2, groundAsWall3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperBall = new paper(50,300,15,15)
	ground = new Ground(500,370,1000,15)
	groundAsWall1 = new GroundAsWall(800,350,150,15)
	groundAsWall2 = new GroundAsWall(732,310,15,70)
	groundAsWall3 = new GroundAsWall(868,310,15,70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed()	
  
   paperBall.display()
   ground.display()
   groundAsWall1.display()
   groundAsWall2.display()
   groundAsWall3.display()

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperObject.body.position,{x:85,y:-85})
	}
}



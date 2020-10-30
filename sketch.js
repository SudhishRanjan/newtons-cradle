
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	 startPosition = width/2
	 startPositionY = height/4+500
	//Create the Bodies Here.
	bobObject1 = new bob(800,startPositionY,40);
	bobObject2 = new bob(startPosition-40,startPositionY,40);
	bobObject3 = new bob(startPosition,startPositionY,40);
	bobObject4 = new bob(startPosition+40,startPositionY,40);
	bobObject5 = new bob(startPosition+40*2,startPositionY,40);
	roof = new ground(width/2,height/4,width/7,20);
	rope1 = new rope(bobObject1.body,roof.body,-40*2,0);
	rope2 = new rope(bobObject2.body,roof.body,-40*1,0);
	rope3 = new rope(bobObject3.body,roof.body,0,0);
	rope4 = new rope(bobObject4.body,roof.body,40*1,0);
	rope5 = new rope(bobObject5.body,roof.body,40*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}
   



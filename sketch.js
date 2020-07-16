var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var bobDiameter=10;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  roofObject1=new Ground(240,100,340,40);
bobObject1=new Bob(160,400);
bobObject2=new Bob(200,400);
bobObject3=new Bob(240,400);
bobObject4=new Bob(280,400);
bobObject5=new Bob(320,400);
rope1=new Rope(bobObject1.body,{x:160,y:100});
rope2=new Rope(bobObject2.body,{x:200,y:100});
rope3=new Rope(bobObject3.body,{x:240,y:100});
rope4=new Rope(bobObject4.body,{x:280,y:100});
rope5=new Rope(bobObject5.body,{x:320,y:100});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-95,y:95})
	}
}



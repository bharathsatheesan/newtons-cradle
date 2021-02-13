
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var base;

function preload() {
	bg = loadImage('images/peace bg.jpg');
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 200, 250, 20);
	bobObject1 = new Bob(300, 320, 25);
	bobObject2 = new Bob(350, 320, 25);
	bobObject3 = new Bob(400, 320, 25);
	bobObject4 = new Bob(450, 320, 25);
	bobObject5 = new Bob(500, 320, 25);
	rope1 = new Rope(bobObject1.body, roof.body, -50*2, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -25*2, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 25*2, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 50*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  if(keyWentDown(LEFT_ARROW)){
	  Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-20, y:-25})
  }

  base = fill("#5D432C");
  strokeWeight(5);
  stroke("grey");
  rect(405, 350, 400,60,30);

  fill("black");
  strokeWeight(5);
  stroke("grey");
  rect(265, 270, 20,160);
  
  fill("black");
  strokeWeight(5);
  stroke("grey");
  rect(535, 270, 20,160);

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}




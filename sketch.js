
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var box1,box2,box3;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	 world = engine.world;
    paper = new Paper(100,200,70);
	ground = new Ground(400,580,800,20)
    box1 = new Dustbin(500,510,20,100);
	box2 = new Dustbin(700,510,20,100);
	box3 = new Dustbin(600,565,200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 //ground.display();
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
}

function keyPressed(){
  if (keyCode === UP_ARROW){

     Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-300});

  }
}


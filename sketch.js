
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		isStatic:true

	}
ground=Bodies.rectangle(400,300,100,50,options)
World.add(world,ground)
bob1=new bob(400,600,20)
bob2=new bob(410,600,20)
bob3=new bob(420,600,20)
rope1=new rope(bob1.body,ground.body,0,0)
rope2=new rope(bob2.body,ground.body,60,0)
rope3=new rope(bob3.body,ground.body,-60,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,22,26);
  
  //translate(width/2,height/2);
  rect(ground.position.x,ground.position.y,400,50)
  bob1.display()
  bob2.display()
  bob3.display()
  rope1.display()
 rope2.display()
 rope3.display()
}




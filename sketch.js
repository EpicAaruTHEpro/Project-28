
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(500, 500, 300, 400);
	ground = new Ground(400,height,800,20);
	stone = new Stone(65, 550, 50, 50);
	boy = new Boy(100, 650, 100, 150);
	mango1 = new Mango(500, 450, 25, 25);
	mango2 = new Mango(480, 420, 40, 40);
	mango3 = new Mango(520, 400, 25, 25);
	mango4 = new Mango(540, 430, 25, 25);
	mango5 = new Mango(470, 470, 40, 40);
	mango6 = new Mango(510, 370, 40, 40);
	mango7 = new Mango(420, 450, 25, 25);
	mango8 = new Mango(570, 450, 40, 40);
	mango9 = new Mango(620, 440, 25, 25);
	mango10 = new Mango(580, 400, 40, 40);
	elastic = new ElasticConstraint(stone.body,{x:65, y:620});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  tree.display();
  ground.display();
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  elastic.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);

  text("Press Space to Hit Again", 400, 200);
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
	elastic.fly();
}

function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	//console.log(distance);
	if (distance < 80) {
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x: 80 , y: 550});
		elastic.attach(stone.body);
	}
}

